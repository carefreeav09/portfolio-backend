import sequelize from "../config/db";
import PostModel from './post.model';

import PostService, { IPostServices } from "./post.service";
const postRepository = sequelize.getRepository(PostModel);

const Posts: IPostServices = new PostService(postRepository);

export default Posts;
