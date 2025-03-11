import { Column, Entity } from "typeorm";
import { CommonEntity } from "../common/Common.entity";

@Entity()
export class User extends CommonEntity {
  @Column({ unique: true, length: 50 })
  email: string;

  @Column({ length: 50 })
  password: string;

  @Column()
  name: string;

  @Column()
  phoneNumber: number;
}
