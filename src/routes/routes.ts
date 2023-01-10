import express from 'express';

import userRouter from '../user/user.router';
import postRouter from '../posts/post.router';

const router = express.Router();

router.use("/status", (req: express.Request, res: express.Response) => {
  return res.status(200).json({ HEALTH: "VERY GOOD" });
});

router.use("/user", userRouter);
router.use('/posts', postRouter);

export default router;
