import express, { Express } from 'express';
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

(async function () {
  try {

    await sequelize.authenticate();
    await sequelize.sync({
      force: false,
    });

    console.log('⚡️⚡️⚡️ Database Connected ⚡️⚡️⚡️');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`⚡️⚡️⚡️ Server is up and running at http//localhost:${port}`);
    })
      .on("error", (e) => {
        console.log(e, 'error');
      })
  }
  catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();