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

  @Column({ type: "simple-array" })
  style: string[];

  @Column({ type: "boolean", default: false })
  hasSpicyNess: boolean;

  @Column({ type: "boolean", default: true })
  isAvailable: boolean;

  @OneToOne(() => Media)
  image: Media;

  @ManyToOne(() => Category, (category) => category.food, {
    onDelete: "CASCADE",
  })
  category: Category;
}
