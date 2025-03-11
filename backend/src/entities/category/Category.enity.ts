import { Column, Entity } from "typeorm";
import { CommonEntity } from "../common/Common.entity";
import { Media } from "../media/media.entity";

@Entity()
export class Category extends CommonEntity {
  @Column()
  name: string;

  @Column(() => Media)
  thumbnail: Media;
}
