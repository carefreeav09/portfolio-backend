import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import sequelize from './config/db';

import router from './routes/routes';
import logger from './utils/logger';

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/uploads', express.static('uploads'));
app.use('/api/v1', router);


const port = process.env.PORT;

(async function () {
  try {

    await sequelize.authenticate();
    await sequelize.sync({
      force: false,
    });

    console.log('⚡️⚡️⚡️ Database Connected ⚡️⚡️⚡️');
    app.listen(port || 5000, () => {
      logger.info(
        `⚡️⚡️⚡️ Express running at port: ${port} -> http://localhost:${port} ⚡️⚡️⚡️`
      );
    })
      .on("error", (e) => {
        logger.error(e);
      })
  }
  catch (error) {
    logger.error(`Unable to connect to Database: ${error}`);
  }
})();