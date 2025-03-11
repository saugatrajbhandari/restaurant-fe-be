import { Column, Entity, OneToOne } from "typeorm";
import { CommonEntity } from "../common/Common.entity";
import { Food } from "../food/Food.entity";

@Entity()
export class Order extends CommonEntity {
  @Column()
  comment: string;

  @OneToOne(() => Food)
  food: Food;
}
