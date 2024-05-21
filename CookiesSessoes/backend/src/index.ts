import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { v4 as uuidv4 } from "uuid";
import session from "express-session";
import { ProdutoCarrinho } from "./resources/compra/compra.types";

import validateEnv from "./utils/validateEnv";
import router from "./router";
import setLangCookie from "./middlewares/setLangCookie";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger-output.json";

declare module "express-session" {
  interface SessionData {
    uid: string;
    tipoUsuarioId: string;
    carrinhoCompra: ProdutoCarrinho[];
  }
}

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PO ?? 4444;

app.use(cookieParser());
app.use(
  session({
    genid: () => uuidv4(),
    secret: "StMf#She#mj34se#dSmf",
    resave: true,
    saveUninitialized: true,
  })
);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(setLangCookie);
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`serve em http://localhost:${PORT}`);
});

declare module "express-session" {
  interface SessionData {
    uid: string;
    tipoUsuario: string;
  }
}
