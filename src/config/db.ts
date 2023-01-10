import path from "path";
import { Sequelize } from "sequelize-typescript";

import dotenv from 'dotenv';
import User from "../user/user.model";
import Posts from '../posts/post.model';

dotenv.config();

const databaseConfig = {
  databaseUser: process.env.POSTGRES_USER,
  databasePassword: process.env.POSTGRES_PASSWORD,
  databaseName: process.env.POSTGRES_DB,
  databaseHost: process.env.POSTGRES_HOST
}

const sequelize = new Sequelize({
  database: databaseConfig.databaseName,
  dialect: "postgres",
  username: databaseConfig.databaseUser,
  password: databaseConfig.databasePassword,
  logging: false,
  repositoryMode: true,
  host: databaseConfig.databaseHost,
  models: [
    User,
    Posts
  ]
});


export default sequelize;