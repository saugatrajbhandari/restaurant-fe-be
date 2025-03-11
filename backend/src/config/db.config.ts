import { DataSource } from "typeorm";
import { EnvConfig } from "./env.config";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: EnvConfig.DB_HOST,
  port: Number(EnvConfig.DB_PORT) || 5432,
  username: EnvConfig.DB_USER,
  password: EnvConfig.DB_PASSWORD,
  database: EnvConfig.DB_NAME,
  entities: [__dirname + "/../entities/*/*.entity{.ts,.js}"],
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
});
