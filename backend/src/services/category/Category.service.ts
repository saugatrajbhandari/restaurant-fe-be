import { Category } from "../../entities/category/Category.entity";
import { Media, MediaType } from "../../entities/media/media.entity";

class CategoryService {
  async create({
    fileName,
    categoryName,
  }: {
    fileName: string;
    categoryName: string;
  }) {
    const media = new Media();
    media.name = fileName;
    media.mediaType = MediaType.CATEGORY_THUMBNAIL;

    await media.save();

    const category = new Category();
    category.name = categoryName;
    category.thumbnail = media;

    await category.save();
    return category;
  }

  async getAll() {
    const category = await Category.find({
      relations: ["thumbnail"],
    });

    return category;
  }
}

export default new CategoryService();
