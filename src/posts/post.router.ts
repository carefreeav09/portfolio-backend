import express from 'express';
import PostController from './post.controller';

const postRouter = express.Router();
const postController = new PostController();

postRouter.get("/:id", postController.findPostById);

postRouter.get("/", postController.getAllPosts);

postRouter.post("/", postController.createPost);

export default postRouter;