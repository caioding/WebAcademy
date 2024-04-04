import express, { Request, Response } from "express";
import envalid from "./utils/envalid";
import dotenv from "dotenv";
import logger from "./middlewares/logger";
import router from "./router/router";
import { engine } from "express-handlebars";
import sass from "node-sass-middleware";

dotenv.config();
envalid();

const app = express();
const PORT = process.env.PORT ?? 3333;

app.use(express.json());
app.use(logger("completo"));

app.engine("handlebars", engine());

app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.engine(
  "handlebars",
  engine({
    helpers: require(`${__dirname}/views/helpers/helpers.ts`),
    layoutsDir: `${__dirname}/views/layouts`
  })
);

app.use("/html", express.static(`${__dirname}/../public/html`));
app.use("/css", express.static(`${__dirname}/../public/css`));
app.use("/js", [
  express.static(`${__dirname}/../public/js`),
  express.static(`${__dirname}/../node_modules/bootstrap/dist/js`)
]);
app.use("/img", [express.static(`${__dirname}/../public/img`)]);

app.use(
  sass({
    src: `${__dirname}/../public/scss`,
    dest: `${__dirname}/../public/css`,
    outputStyle: "compressed",
    prefix: "/css"
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(logger("simples"));
app.use(router);

app.use(router);

app.use((req: Request, res: Response) => {
  res.status(404).send("Página não encontrada");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
