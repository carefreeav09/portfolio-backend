import { Repository } from "sequelize-typescript";
import Posts, { IPost } from "./post.model";
import User from "../user";

export interface IPostServices {
  getAllPosts(): Promise<IPost[]>;
  findPostById(id: number): Promise<IPost | null>;
  createPost(data: IPost): Promise<IPost>;
  updatePost: (data: IPost) => Promise<any>;
}

export default class PostService implements IPostServices {
  private _model;

  constructor(
    protected model: Repository<Posts>
  ) {
    this._model = model;
  }

  async getAllPosts(): Promise<IPost[]> {
    return await this._model.findAll();
  }

  async findPostById(id: number): Promise<IPost | null> {
    return await this._model.findByPk(id);
  }

  async createPost(data: any) {
    return (await this._model.create(data)).get({ plain: true });
  }

  async updatePost(data: any) {
    const { id } = data;

    if (!id) {
      const error: any = new Error("No id provided");
      error.code = 404;
      throw error;
    }

    const post = await this._model.findByPk(id);

    if (!post) {
      const error: any = new Error("Post not found");
      error.code = 404;
      throw error;
    }

    const updatedPostData = await this._model.update(data, {
      where: { id },
      returning: true,
    });
    return updatedPostData[1][0]
  }

  async deletePost(id: number) {
    if (!id) {
      const error: any = new Error("No id provided");
      error.code = 404;
      throw error;
    }

    return await this._model.destroy({ where: { id } });
  }
} 