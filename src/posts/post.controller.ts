import { Request, Response, NextFunction } from 'express';
import Posts from './index';

import { IPost } from './post.model';
import { success } from '../utils/helpers/responseHelper';

export default class PostController {
  async getAllPosts(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const posts: IPost[] = await Posts.getAllPosts();
      res.status(200).json(success(
        'Posts',
        posts,
        res.statusCode
      ));
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
      res.status(200).json(success(
        'Post Found',
        post,
        res.statusCode
      ));
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
      const post: IPost = await Posts.createPost(req.body);
      res.status(201).json(
        success(
          'Post Created successfully',
          post,
          res.statusCode
        )
      );
    }
    catch (err) {
      next(err);
    }
  }

  async updatePost(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const id = Number(req.params.id);
    try {
      const post: any = await Posts.updatePost(req.body, id);
      return res
        .status(200)
        .json(
          success(
            'Post updated successfully',
            post,
            res.statusCode
          )
        );
    }
    catch (err) {
      next(err);
    }
  }
}