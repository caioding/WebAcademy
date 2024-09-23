"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const produto_service_1 = require("./produto.service");
const index = async (req, res) => {
    try {
        const produtos = await (0, produto_service_1.listProdutos)();
        res.status(http_status_codes_1.StatusCodes.OK).json(produtos);
    }
    catch (err) {
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
};
const create = async (req, res) => {
    const produto = req.body;
    try {
        if (await (0, produto_service_1.checkNomeIsAvaliable)(produto.nome)) {
            const novoProduto = await (0, produto_service_1.createProduto)(produto);
            res.status(http_status_codes_1.StatusCodes.CREATED).json(novoProduto);
        }
        else {
            res.status(http_status_codes_1.StatusCodes.CONFLICT).json({ reason: http_status_codes_1.ReasonPhrases.CONFLICT }); // Added a comma after the object key
        }
    }
    catch (err) {
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
};
const read = async (req, res) => { };
const update = async (req, res) => { };
const remove = async (req, res) => { };
exports.default = { index, create, read, update, remove };
