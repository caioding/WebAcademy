import express, { Request, Response } from 'express';
import envalid from './utils/envalid';
import dotenv from 'dotenv';
import logger from './middlewares/logger';
import router from './router/router';
import { engine } from 'express-handlebars';

dotenv.config();
envalid();

const app = express();
const PORT = process.env.PORT ?? 3333;

app.use(express.json());
app.use(logger('completo'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);

app.engine("handlebars", engine({
  helpers: require(`${__dirname}/views/helpers/helpers.ts`)
}));


app.use('/html', express.static(`${__dirname}/../public/html`));
app.use('/css', express.static(`${__dirname}/../public/css`));
app.use('/js', express.static(`${__dirname}/../public/js`));
app.use('/img', express.static(`${__dirname}/../public/img`));

app.use(router);

app.use((req: Request, res: Response) => {
  res.status(404).send('Página não encontrada');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
