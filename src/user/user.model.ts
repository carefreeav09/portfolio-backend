import { Model, AllowNull, Column, DataType, Table, Unique, HasOne } from "sequelize-typescript";

type USER_TYPE = "admin" | "user";

export interface IUser {
  [x: string]: any;
  username: string;
  password: string;
  type: USER_TYPE;
}

@Table({ timestamps: true })
class User extends Model {
  @Unique
  @Column
  username: string;

  @Column
  password: string;

  @Column
  type: USER_TYPE;
  default: USER_TYPE = "user";
}

export default User;