import * as process from 'process';
import { type Low } from '@commonify/lowdb';
import { compare, hash } from 'bcrypt';
import { type JwtPayload, sign, verify } from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { type Data } from '../../server';
import { UserDto } from '../dtos/UserDto';
import { ApiError } from '../exceptions/ApiError';
import { type IUser } from '../models/UserModel';
import { MailService } from './MailService';

export class UserService {
  usersDB: Low<Data>;
  mailService: MailService;
  constructor(usersDB: Low<Data>) {
    this.usersDB = usersDB;
    this.mailService = new MailService();
  }

  public async registration(
    email: string,
    password: string
  ): Promise<{ user: UserDto; accessToken: string; refreshToken: string }> {
    const candidate = this.usersDB.data?.users.find((user) => user.email === email);

    if (candidate != null) {
      throw ApiError.BadRequest(`Пользователь с email ${email} уже существует`);
    }

    const passwordHash = await hash(password, 3);
    const activationLink = uuidv4();
    const newUserId = uuidv4();

    const user: IUser = {
      id: newUserId,
      email,
      password: passwordHash,
      isActivated: false,
      activationLink
    };

    this.usersDB.data?.users.push(user);
    await this.usersDB.write();

    await this.mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/activate/${activationLink}`
    );

    const userDto = new UserDto(user);
    const tokens = this.generateTokens(userDto);
    await this.saveToken(user.id, tokens.refreshToken);

    return { user: userDto, ...tokens };
  }

  public async login(
    email: string,
    password: string
  ): Promise<{ user: UserDto; accessToken: string; refreshToken: string }> {
    const user = this.usersDB.data?.users.find((user) => user.email === email);
    if (user == null) {
      throw ApiError.BadRequest(`Пользователь с email ${email} не зарегистрирован`);
    }

    const isPasswordsEqual = await compare(password, user.password);
    if (!isPasswordsEqual) {
      throw ApiError.BadRequest('Введен неверный пароль');
    }

    if (!user.isActivated) {
      throw ApiError.BadRequest('Учетная запись не активирована. Подтвердите почту');
    }

    const userDto = new UserDto(user);
    const tokens = this.generateTokens(userDto);

    user.refreshToken = tokens.refreshToken;
    await this.usersDB.write();

    return { user: userDto, ...tokens };
  }

  public async logout(refreshToken: string): Promise<void> {
    await this.removeToken(refreshToken);
  }

  public async refresh(
    refreshToken?: string
  ): Promise<{ user: UserDto; accessToken: string; refreshToken: string }> {
    if (refreshToken == null) {
      throw ApiError.UnauthorizedError();
    }
    const userData = this.validateRefreshToken(refreshToken);
    const user = this.usersDB.data?.users.find(
      (user) => user.refreshToken === refreshToken
    );

    if (userData == null || user == null) {
      throw ApiError.UnauthorizedError();
    }

    const userDto = new UserDto(user);
    const tokens = this.generateTokens(userDto);

    user.refreshToken = tokens.refreshToken;
    await this.usersDB.write();

    return { user: userDto, ...tokens };
  }

  public generateTokens(payload: UserDto): {
    accessToken: string;
    refreshToken: string;
  } {
    const accessToken = sign({ ...payload }, process.env.JWT_ACCESS_SECRET, {
      expiresIn: process.env.ACCESS_EXPIRES
    });
    const refreshToken = sign({ ...payload }, process.env.JWT_REFRESH_SECRET, {
      expiresIn: process.env.REFRESH_EXPIRES
    });
    return {
      accessToken,
      refreshToken
    };
  }

  public async saveToken(userId: string, refreshToken: string): Promise<void> {
    const user = this.usersDB.data?.users.find((user) => user.id === userId);
    if (user != null) user.refreshToken = refreshToken;
    await this.usersDB.write();
  }

  public async active(activationLink: string): Promise<void> {
    const user = this.usersDB.data?.users.find(
      (user) => user.activationLink === activationLink
    );
    if (user == null) {
      throw ApiError.BadRequest('Некорректная ссылка активации');
    }
    user.isActivated = true;
    await this.usersDB.write();
  }

  public async removeToken(refreshToken: string): Promise<void> {
    const user = this.usersDB.data?.users.find(
      (user) => user.refreshToken === refreshToken
    );
    if (user == null) {
      throw ApiError.BadRequest('Пользователь с таким refreshToken не найден');
    }
    user.refreshToken = '';
    await this.usersDB.write();
  }

  public validateAccessToken(accessToken: string): string | JwtPayload | null {
    try {
      return verify(accessToken, process.env.JWT_ACCESS_SECRET);
    } catch (e) {
      return null;
    }
  }

  public validateRefreshToken(refreshToken: string): string | JwtPayload | null {
    try {
      return verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    } catch (e) {
      return null;
    }
  }
}
