"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const envalid_1 = __importDefault(require("./utils/envalid"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("./middlewares/logger"));
const router_1 = __importDefault(require("./router/router"));
const express_handlebars_1 = require("express-handlebars");
dotenv_1.default.config();
(0, envalid_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT ?? 3333;
app.use(express_1.default.json());
app.use((0, logger_1.default)('completo'));
app.engine('handlebars', (0, express_handlebars_1.engine)());
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/../views`);
app.use("/html", express_1.default.static(`${__dirname}/../public/html`));
app.use("/css", express_1.default.static(`${__dirname}/../public/css`));
app.use("/js", express_1.default.static(`${__dirname}/../public/js`));
app.use("/img", express_1.default.static(`${__dirname}/../public/img`));
app.use(router_1.default);
app.use((req, res) => {
    res.status(404).send('Página não encontrada');
});
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
