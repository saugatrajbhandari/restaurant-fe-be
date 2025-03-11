import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { CommonEntity } from "../common/Common.entity";
import { Media } from "../media/media.entity";
import { Food } from "../food/Food.entity";

@Entity()
export class Category extends CommonEntity {
  @Column()
  name: string;

  @OneToOne(() => Media)
  @JoinColumn()
  thumbnail: Media;

  @OneToMany(() => Food, (f) => f.category)
  food: Food[];
}
