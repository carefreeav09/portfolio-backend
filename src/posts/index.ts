import sequelize from "../config/db";
import PostModel from './post.model';
import PostService from "./post.service";
const postRepository = sequelize.getRepository(PostModel);

const Posts = new PostService(postRepository);

export default Posts;
