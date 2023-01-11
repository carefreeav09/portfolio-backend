import { authUser } from './../middleware/auth';
import express from 'express';
import UserController from './user.controller';
import userSchema from './user.validator';
import validate from '../utils/validate';

const userRouter = express.Router();
const userController = new UserController();

userRouter.get("/:id", userController.findUserById);

userRouter.get("/", userController.getAllUsers);

userRouter.post("/", authUser, validate(userSchema), userController.createUser);

export default userRouter;