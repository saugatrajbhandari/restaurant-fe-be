import { Body, Controller, Middlewares, Post, Route } from "tsoa";
import { RequestValidator } from "../../middlewares/requestValidator.middleware";
import { CreateFoodDTO } from "../../dto/food/food.dto";
import FoodService from "../../services/food/Food.service";

@Route("food")
export class FoodController extends Controller {
  @Post("/")
  @Middlewares(RequestValidator.validate(CreateFoodDTO))
  async createFood(@Body() body: CreateFoodDTO) {
    console.log(body);
    const data = await FoodService.add(body);
    return {
      status: "success",
      data,
    };
  }
}
