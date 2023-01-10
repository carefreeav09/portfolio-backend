import express from 'express';
import UserController from './user.controller';

const userRouter = express.Router();
const userController = new UserController();

userRouter.get("/:id", userController.findUserById);

userRouter.get("/", userController.getAllUsers);

userRouter.post("/", userController.createUser);

export default userRouter;