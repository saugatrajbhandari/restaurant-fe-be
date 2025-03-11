import { Controller, Post, Route } from "tsoa";

@Route("food")
export class FoodController extends Controller {
  @Post("/")
  async createFood() {}
}
