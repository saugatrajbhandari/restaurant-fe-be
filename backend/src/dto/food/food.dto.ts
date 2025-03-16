import {
  IsBoolean,
  IsNumber,
  IsString,
  IsUUID,
  Length,
  Min,
} from "class-validator";

class CreateFoodDTO {
  @IsString()
  @Length(3, 50)
  name: string;

  @IsNumber()
  @Min(0.1)
  price: number;

  @IsString()
  style?: string;

  @IsBoolean()
  hasSpicyNess?: boolean;

  @IsUUID()
  category: string;

  @IsUUID()
  image: string;
}
