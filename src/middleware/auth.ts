/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable indent */
import jwt from "jsonwebtoken";
import Express from "express";
import { jwtConfig } from "../utils/jwt";
import { error } from "../utils/helpers/responseHelper";


export const authUser = async (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  try {
    const jwtData = commonAuth(req, res);
    //@ts-ignore next-line
    req.user = jwtData.user;
    next();
  } catch (err: any) {
    next(err);
  }
};

export const authAdmin = async (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  try {
    const jwtData = commonAuth(req, res);
    //@ts-ignore next-line
    if (jwtData.user.role !== "ADMINISTRATOR") {
      return res
        .status(401)
        .json(error("You are not authorized.", res.statusCode));
    }
    //@ts-ignore next-line
    req.user = jwtData.user;
    next();
  } catch (err: any) {
    next(err);
  }
};

const commonAuth = (req: Express.Request, res: Express.Response) => {
  const authorizationHeader = req.header("Authorization");

  if (!authorizationHeader) {
    const err: any = new Error("No Authorization Token");
    err.code = 401;
    throw err;
  }

  const splitAuthorizationHeader = authorizationHeader.split(" ");

  const bearer = splitAuthorizationHeader[0];
  const token = splitAuthorizationHeader[1];

  if (bearer !== "Bearer") {
    const err: any = new Error("The authorization type is must be a Bearer");
    err.code = 400;
    throw err;
  }
  if (!token) {
    const err: any = new Error("No token found");
    err.code = 404;
    throw err;
  }

  const jwtData = jwt.verify(token, jwtConfig.access.secret);
  if (!jwtData) {
    const err: any = new Error("Unauthorized");
    err.code = 401;
    throw err;
  }

  // if (!JwtHelper.validateAccessToken(token))
  //   return res
  //     .status(404)
  //     .json(error("Token already reset.", res.statusCode));
  return jwtData;
};

export default commonAuth;
