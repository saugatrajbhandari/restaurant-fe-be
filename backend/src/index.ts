import "reflect-metadata";

import { AppDataSource } from "./config/db.config";
import express from "express";
import { RegisterRoutes } from "./routes/routes";
import saggerUi from "swagger-ui-express";
import swaggerJson from "../public/swagger.json";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    const app = express();
    app.use(express.json());
    app.use("/api-docs", saggerUi.serve, saggerUi.setup(swaggerJson));
    RegisterRoutes(app);
    app.listen(8000, () => console.log("app is listening"));
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
