"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProdutos = exports.createProduto = exports.checkNomeIsAvaliable = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const checkNomeIsAvaliable = async (nome) => {
    return !(await prisma.produto.findUnique({ where: { nome } }));
};
exports.checkNomeIsAvaliable = checkNomeIsAvaliable;
const createProduto = async (produto) => {
    return await prisma.produto.create({ data: produto });
};
exports.createProduto = createProduto;
const listProdutos = async () => {
    return await prisma.produto.findMany();
};
exports.listProdutos = listProdutos;
