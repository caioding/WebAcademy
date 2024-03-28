import express, { Request, Response } from "express";
import envalid from "./utils/envalid";
import dotenv from "dotenv";

dotenv.config();
envalid();
const app = express();
const PORT = process.env.PORT ?? 3333;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
