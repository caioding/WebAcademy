"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const envalid_1 = __importDefault(require("./utils/envalid"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
(0, envalid_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT ?? 3333;
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
