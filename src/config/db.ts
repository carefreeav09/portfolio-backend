import path from "path";
import { Sequelize } from "sequelize-typescript";

import dotenv from 'dotenv';

dotenv.config();

const databaseConfig = {
  databaseUser: process.env.POSTGRES_USER ?? "postgres",
  databasePassword: process.env.POSTGRES_PASSWORD ?? "carefreeav",
  databaseName: process.env.POSTGRES_DB ?? "carefreeav",
  databaseHost: process.env.POSTGRES_HOST ?? "localhost",
}

console.log(databaseConfig, 'databaseConfig');
const sequelize = new Sequelize({
  database: databaseConfig.databaseName,
  dialect: "postgres",
  username: databaseConfig.databaseUser,
  password: databaseConfig.databasePassword,
  logging: false,
  repositoryMode: true,
  host: databaseConfig.databaseHost,
});

console.log(sequelize, 'sequelize');

export default sequelize;