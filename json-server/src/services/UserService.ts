import * as process from 'process';
import { type Low } from '@commonify/lowdb';
import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import {
  type Data
} from '../../server';
import { UserDto } from '../dtos/UserDto';
import { type IUser } from '../models/UserModel';
import { MailService } from './MailService';

export class UserService {
  usersDB: Low<Data>;
  mailService: MailService;
  constructor (usersDB: Low<Data>) {
    this.usersDB = usersDB;
    this.mailService = new MailService();
  }

  public async registration (
    email: string,
    password: string
  ): Promise<{ user: UserDto; accessToken: string; refreshToken: string }> {
    const candidate = this.usersDB.data?.users
      .find((user) => user.email === email);

    if (candidate != null) {
      throw new Error(`Пользователь с email ${email} уже существует`);
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
      email, `${process.env.API_URL}/activate/${activationLink}`
    );

    const userDto = new UserDto(user);
    const tokens = this.generateTokens(userDto);
    await this.saveToken(user.id, tokens.refreshToken);

    return { user: userDto, ...tokens };
  };

  public generateTokens (
    payload: UserDto
  ): { accessToken: string; refreshToken: string } {
    const accessToken = sign(
      { ...payload },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: process.env.ACCESS_EXPIRES }
    );
    const refreshToken = sign(
      { ...payload },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: process.env.REFRESH_EXPIRES }
    );
    return {
      accessToken,
      refreshToken
    };
  };

  public async saveToken (userId: string, refreshToken: string): Promise<void> {
    const user = this.usersDB.data?.users.find(user => user.id === userId);
    if (user != null) user.refreshToken = refreshToken;
    await this.usersDB.write();
  }

  public async active (activationLink: string): Promise<void> {
    const user = this.usersDB.data?.users
      .find(user => user.activationLink === activationLink);
    if (user == null) {
      throw new Error('Некорректная ссылка активации');
    }
    user.isActivated = true;
    await this.usersDB.write();
  }
}
