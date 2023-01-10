import express from 'express';

import userRouter from '../user/user.router';

const router = express.Router();

router.use("/status", (req: express.Request, res: express.Response) => {
  return res.status(200).json({ MSG: "SUCCESS" });
});

router.use("/user", userRouter);

export default router;
