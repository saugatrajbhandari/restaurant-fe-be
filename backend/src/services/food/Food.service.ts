import { CreateFoodDTO } from "../../dto/food/food.dto";
import { Category } from "../../entities/category/Category.entity";
import { Food } from "../../entities/food/Food.entity";
import { Media } from "../../entities/media/media.entity";

class FoodService {
  async add(body: CreateFoodDTO) {
    const food = new Food();

    food.name = body.name;
    food.hasSpicyNess = body?.hasSpicyNess ?? false;
    food.price = body.price;
    const image = await Media.findOne({ where: { id: body.image } });

    if (!image) {
      throw new Error("Image not found");
    }

    const category = await Category.findOne({ where: { id: body.category } });

    if (!category) {
      throw new Error("Category not found");
    }

    food.image = image;
    food.category = category;
    food.style = body.style?.split(", ") ?? [];
    return await food.save();
  }
}

export default new FoodService();
