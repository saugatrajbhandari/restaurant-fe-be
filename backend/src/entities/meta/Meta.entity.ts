import { Column } from "typeorm";
import { CommonEntity } from "../common/Common.entity";

export enum MetaType {
  CONTACT = "CONTACT",
  ADDRESS = "ADDRESS",
  VENDOR_NAME = "VENDOR_NAME",
  BUSINESS_HOUR = "BUSINESS_HOUR",
  SOCIAL_MEDIA = "SOCIAL_MEDIA",
  ABOUT = "ABOUT",
}

export class Meta extends CommonEntity {
  @Column({ type: "enum", enum: MetaType })
  type: MetaType;

  @Column({ type: "text" })
  value: string;
}
