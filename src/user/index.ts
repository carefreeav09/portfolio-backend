import sequelize from "../config/db";
import UserModel from "./user.model";
import UserService, { IUserService } from "./user.service";

const userModel = sequelize.getRepository(UserModel);


const User: IUserService = new UserService(userModel);

export default User;
