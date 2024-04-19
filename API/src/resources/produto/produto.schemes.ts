import Joi from 'joi';

const produtoSchme = Joi.object().keys({
    nome: Joi.string().min(3).max(50).required(),
    preco: Joi.number().required(),
    estoque: Joi.number().required(),
})
const produto = {
    nome: "oiii sumuida",
    preco:4.5,
    estoque: 10,
}

const result = produtoSchme.validate(produto);
console.log(result);