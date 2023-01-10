
import User, { IUser } from './user.model';
import { Repository } from "sequelize-typescript";

export interface IUserService {
  getAllUsers(): Promise<IUser[]>;
  findUserById(id: number): Promise<IUser | null>;
  createUser(user: IUser): Promise<IUser>;
  findUserByUsername: (username: string) => Promise<IUser | null>;
}

export default class UserService implements IUserService {
  private _model;

  constructor(
    protected model: Repository<User>,
  ) {
    this._model = model;
  }

  async getAllUsers(): Promise<IUser[]> {
    return await this._model.findAll();
  }

  async findUserById(id: number): Promise<IUser | null> {
    return await this._model.findByPk(id);
  }

  async createUser(data: any) {
    return (await this._model.create(data)).get({ plain: true });
  }

  async findUserByUsername(username: string): Promise<IUser | null> {
    return await this._model.findOne({
      where: {
        username
      }
    });
  }
}




