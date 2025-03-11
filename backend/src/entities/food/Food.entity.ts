import { Column, Entity, ManyToOne, OneToOne } from "typeorm";
import { CommonEntity } from "../common/Common.entity";
import { Media } from "../media/media.entity";
import { Category } from "../category/Category.entity";

export enum FoodSpiciness {
  MILD = "MILD",
  MEDIUM = "MEDIUM",
  HOT = "HOT",
  EXTRA_HOT = "EXTRA_HOT",
}

@Entity()
export class Food extends CommonEntity {
  @Column()
  name: string;

  @Column({ type: "real" })
  price: number;

  @Column({ type: "enum", enum: FoodSpiciness })
  type: FoodSpiciness;

  @Column({ default: 0, type: "int" })
  quantity: number;

  @OneToOne(() => Media)
  image: Media;

  @ManyToOne(() => Category, (category) => category.food, {
    onDelete: "CASCADE",
  })
  category: Category;
}
