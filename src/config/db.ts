import path from "path";
import { Sequelize } from "sequelize-typescript";
import { Client } from 'pg';
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

// const supabaseDatabaseConfig = {
//   databaseUser: process.env.SUPABASE_USER,
//   databasePassword: process.env.SUPABASE_PASSWORD,
//   databaseName: process.env.SUPABASE_DB,
//   databaseHost: process.env.SUPABASE_HOST
// }

// const supabaseUrl = `postgres://${supabaseDatabaseConfig.databaseUser}:${supabaseDatabaseConfig.databasePassword}@${supabaseDatabaseConfig.databaseHost}/${supabaseDatabaseConfig.databaseName}`;
// const client = new Client({
//   connectionString: supabaseUrl
// })

// try {
//   console.log('SUPABASE CONNECTION');
//   client.connect();
//   console.log('GREAT SUCCESS');
// }
// catch (error) {
//   console.log('FAILED');
//   console.log(error)
// }


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