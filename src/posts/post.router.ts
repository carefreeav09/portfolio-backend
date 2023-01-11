import { authUser } from './../middleware/auth';
import express from 'express';
import PostController from './post.controller';
import validate from '../utils/validate';
import postSchema from './post.validator';

const postRouter = express.Router();
const postController = new PostController();

postRouter.get("/:id", postController.findPostById);

postRouter.get("/", postController.getAllPosts);

postRouter.post("/", authUser, validate(postSchema), postController.createPost);

export default postRouter;