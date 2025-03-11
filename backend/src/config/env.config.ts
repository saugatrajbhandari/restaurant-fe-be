import "dotenv/config";

export class EnvConfig {
  static DB_NAME = process.env.DB_NAME;
  static DB_USER = process.env.DB_USER;
  static DB_PASSWORD = process.env.DB_PASSWORD;
  static DB_PORT = process.env.DB_PORT;
  static DB_HOST = process.env.DB_HOST;
}
