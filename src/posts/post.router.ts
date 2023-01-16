import { authUser } from './../middleware/auth';
import express from 'express';
import PostController from './post.controller';
import validate from '../utils/validate';
import postSchema from './post.validator';
import { upload } from '../config/multer';

const postRouter = express.Router();
const postController = new PostController();

postRouter.get("/:id", postController.findPostById);

postRouter.get("/", postController.getAllPosts);

postRouter.post("/", upload().single("image"), validate(postSchema), postController.createPost);

postRouter.patch("/:id", validate(postSchema), upload().single("image"), postController.updatePost);

export default postRouter;