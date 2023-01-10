import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import sequelize from './config/db';

import router from './routes/routes';

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1', router);


const port = process.env.PORT;

console.log(port, 'port');

(async function () {
  try {
    console.log('⚡️⚡️⚡️ Trying to authenticate connection ⚡️⚡️⚡️');
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');


    await sequelize.sync({
      force: true,
    });

    app.listen(process.env.PORT || 5000, () => {
      console.log(`⚡️⚡️⚡️ [server]: Server is up and running at http//localhost:${port}`);
    })
      .on("error", (e) => {
        console.log(e, 'error');
      })
  }
  catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();