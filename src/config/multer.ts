import fs from "fs";
import multer from "multer";

interface IFileUploader {
  upload(limit: any, filter: any): multer.Multer | any;
}

class LocalFileUploader implements IFileUploader {
  private storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
      const path = "./uploads";
      fs.mkdirSync(path, { recursive: true });
      cb(null, path);
    },
    filename: (_req, file, cb) => {
      cb(null, `${Date.now().toString()}-name-${file.originalname}`);
    },
  });

  upload(limit: any, filter: any) {
    return multer({ storage: this.storage, limits: limit, fileFilter: filter });
  }
}

class Consumer {
  private fileUploader: IFileUploader;
  constructor(fileUploader: IFileUploader) {
    this.fileUploader = fileUploader;
  }

  uploadFile(limit: any, filter: any): multer.Multer {
    return this.fileUploader.upload(limit, filter);
  }
}

export const upload = (limit: any = null, filter: any = null) =>
  new Consumer(
    new LocalFileUploader()
  ).uploadFile(limit, filter);

