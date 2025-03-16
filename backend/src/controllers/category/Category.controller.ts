import {
  Body,
  Controller,
  FormField,
  Get,
  Path,
  Post,
  Route,
  UploadedFile,
} from "tsoa";
import fs from "fs";
import CategoryService from "../../services/category/Category.service";
import MediaService from "../../services/media/Media.service";
import FoodService from "../../services/food/Food.service";

@Route("category")
export class CategoryController extends Controller {
  @Get("/")
  async getCategory() {
    const category = await CategoryService.getAll();

    return { data: category };
  }

  @Post("/")
  async createCategory(
    @FormField() name: string,
    @UploadedFile()
    file: Express.Multer.File
  ) {
    const buffer = Buffer.from(file.buffer);
    const fileName = Date.now() + file.originalname;

    console.log(buffer, "buffer");
    console.log(process.cwd(), "cwd");

    fs.writeFileSync(
      `${process.cwd()}/public/uploads/category/${fileName}`,
      buffer
    );

    CategoryService.create({ fileName, categoryName: name });

    return { data: [] };
  }

  @Get("/:id/foods")
  async getCategoryFoods(@Path() id: string) {
    return await CategoryService.getCategoryFoods(id);
  }
}
