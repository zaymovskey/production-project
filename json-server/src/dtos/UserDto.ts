import { type IUser } from '../models/UserModel';

export class UserDto {
  email;
  id;
  isActivated;

  constructor (model: IUser) {
    this.email = model.email;
    this.id = model.id;
    this.isActivated = model.isActivated;
  }
}
