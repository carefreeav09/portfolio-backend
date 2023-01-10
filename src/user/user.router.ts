import express from 'express';

const userRouter = express.Router();

userRouter.use("/", (req: express.Request, res: express.Response) => {
  return res.status(200).json({ MSG: "USER ROUTE SUCCESS" });
});

export default userRouter;