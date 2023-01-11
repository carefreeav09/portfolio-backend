/* eslint-disable indent */
import logger from "../logger";

const success = (message: string, result: any, statusCode: number) => {
  logger.info(message);
  return {
    message,
    result,
    code: statusCode,
  };
};

const validation = (errors: any) => {
  let error: string[] = [];
  errors.issues.map((elem: { message: string }) => {
    error.push(elem.message);
  });
  logger.error(error);
  return {
    message: "Validation error",
    code: 422,
    error,
  };
};

const error = (err: any, statusCode: number) => {
  const codes = [400, 401, 404, 403, 406, 422, 500];

  if (!codes.includes(statusCode)) statusCode = 500;

  const anyMessage =
    err.message ??
    "There is issue in backend server. If the error persists, kindly contact the backend developer.";

  const message = typeof err === "string" ? err : anyMessage;

  logger.error(message);
  return {
    message,
    code: statusCode,
  };
};

export { success, validation, error };
