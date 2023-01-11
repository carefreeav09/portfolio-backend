/* eslint-disable indent */
import { z, ZodTypeAny } from "zod";
import Express from "express";
import { validation } from "./helpers/responseHelper";

const validate =
  (schema: ZodTypeAny) =>
    (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
      try {
        const data = schema.parse(req.body);
        req.body = data;
        next();
      } catch (err) {
        return res.status(422).json(validation(err));
      }
    };

export const validateQuery =
  (schema: ZodTypeAny) =>
    (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
      try {
        schema.parse(req.query);
        next();
      } catch (err) {
        return res.status(422).json(validation(err));
      }
    };

export const validateParams =
  (schema: ZodTypeAny) =>
    (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
      try {
        schema.parse(req.params);
        next();
      } catch (err) {
        return res.status(422).json(validation(err));
      }
    };

export default validate;
