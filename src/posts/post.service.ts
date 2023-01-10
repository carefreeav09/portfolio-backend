import { Repository } from "sequelize-typescript";
import Posts, { IPost } from "./post.model";

export interface IPostServices {
  getAllPosts(): Promise<IPost[]>;
  findPostById(id: number): Promise<IPost | null>;
  createPost(data: IPost): Promise<IPost>
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


} 