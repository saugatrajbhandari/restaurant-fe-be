import { BaseEntity, Column, Entity } from "typeorm";
import { CommonEntity } from "../common/Common.entity";

enum MediaType {
  CATEGORY_THUMBNAIL = "CATEGORY_THUMBNAIL",
  FOOD_THUMBNAIL = "FOOD_THUMBNAIL",
}

@Entity()
export class Media extends CommonEntity {
  @Column()
  name: string;

  @Column()
  mediaType: MediaType;
}
