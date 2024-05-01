import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import validateEnv from "./utils/validateEnv";
import router from "./router";
import setLangCookie from "./middlewares/setLangCookie";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger-output.json";
...
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 4444;

app.use(cookieParser());
app.use(setLangCookie);
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`serve em http://localhost:${PORT}`);
});


declare module 'express' {