import { Body, Controller, FormField, Post, Route, UploadedFile } from "tsoa";
import { MediaType } from "../../entities/media/media.entity";
import fs from "fs";
import MediaService from "../../services/media/Media.service";

@Route("media")
export class MediaController extends Controller {
  @Post("/")
  async uploadMedia(
    @UploadedFile("file") file: Express.Multer.File,
    @FormField() type: MediaType
  ) {
    const buffer = Buffer.from(file.buffer);
    const fileName = Date.now() + file.originalname;

    if (type === MediaType.CATEGORY_THUMBNAIL) {
      if (!fs.existsSync(`${process.cwd()}/public/uploads/category`)) {
        fs.mkdirSync(`${process.cwd()}/public/uploads/category`, {
          recursive: true,
        });
      }

      fs.writeFileSync(
        `${process.cwd()}/public/uploads/category/${fileName}`,
        buffer
      );
    } else {
      if (!fs.existsSync(`${process.cwd()}/public/uploads/food`)) {
        fs.mkdirSync(`${process.cwd()}/public/uploads/food`, {
          recursive: true,
        });
      }

      fs.writeFileSync(
        `${process.cwd()}/public/uploads/food/${fileName}`,
        buffer
      );
    }

    return await MediaService.create({ type, fileName });
  }
}
