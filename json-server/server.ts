import path from 'path';
import * as process from 'process';
import { Low, JSONFile } from '@commonify/lowdb';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import { type Request, type Response } from 'express';
import { type NextFunction } from 'express-serve-static-core';
import jsonServer from 'json-server';
import { UserController } from './src/controllers/UserController';
import { type IUser } from './src/models/UserModel';
import './global';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export const USERS_DB_PATH = path.resolve(__dirname, 'users.json');
const DB_PATH = path.resolve(__dirname, 'db.json');

export interface Data {
  users: IUser[];
}

const wrapper = async (): Promise<void> => {
  const server = jsonServer.create();
  const router = jsonServer.router(DB_PATH);

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(jsonServer.defaults());

  const usersDB = new Low<Data>(new JSONFile(USERS_DB_PATH));
  await usersDB.read();

  const userController = new UserController(usersDB);

  server.post('/registration', (req: Request, res: Response, next: NextFunction) => {
    void userController.registration(req, res, next);
  });
  server.post('/login', (req: Request, res: Response, next: NextFunction) => {
    void userController.login(req, res, next);
  });
  server.post('/logout', (req: Request, res: Response, next: NextFunction) => {
    void userController.logout(req, res, next);
  });
  server.get('/activate/:link', (req: Request, res: Response, next: NextFunction) => {
    void userController.activate(req, res, next);
  });
  server.get('/refresh', (req: Request, res: Response, next: NextFunction) => {
    void userController.refresh(req, res, next);
  });
  server.get('/users', (req: Request, res: Response, next: NextFunction) => {
    void userController.getUsers(req, res, next);
  });

  server.use(router);

  server.listen(process.env.PORT, () => {
    console.log('Run Auth API Server');
  });
};

void wrapper();
