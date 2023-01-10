import path from "path";
import { Sequelize } from "sequelize-typescript";

import dotenv from 'dotenv';
import User from "../user/user.model";

dotenv.config();

const databaseConfig = {
  databaseUser: process.env.POSTGRES_USER ?? "postgres",
  databasePassword: process.env.POSTGRES_PASSWORD ?? "root123",
  databaseName: process.env.POSTGRES_DB ?? "carefreeav",
  databaseHost: process.env.POSTGRES_HOST ?? "db",
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
    User
  ]
});


export default sequelize;