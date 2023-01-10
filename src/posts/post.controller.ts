import { Request, Response, NextFunction } from 'express';
import Posts from './index';

import { IPost } from './post.model';

export default class PostController {
  async getAllPosts(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const posts: IPost[] = await Posts.getAllPosts();
      res.status(200).json(posts);
    }
    catch (err) {
      next(err);
    }
  }

  async findPostById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const post: IPost | null = await Posts.findPostById(
        Number(req.params.id)
      );
      res.status(200).json(post);
    }
    catch (err) {
      next(err);
    }
  }

  async createPost(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user: IPost = await Posts.createPost(req.body);
      res.status(201).json(user);
    }
    catch (err) {
      next(err);
    }
  }
}