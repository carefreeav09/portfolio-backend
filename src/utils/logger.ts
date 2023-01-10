import winston from "winston";

const { combine, timestamp, printf } = winston.format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const logger = winston.createLogger({
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    myFormat,
    winston.format.colorize({ all: true }),
  ),
  transports: [new winston.transports.Console()],
});

export default logger;
