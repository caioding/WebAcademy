import Joi from 'joi';

export const produtoSchema = Joi.object().keys({
    nome: Joi.string().min(3).max(50).required(),
    preco: Joi.number().required(),
    estoque: Joi.custom((value) => value === 0 ? 0 : 1),
    tags: Joi.array().items(Joi.string())
});

const produto = {
    nome: "oiii",
    preco: 4.5,
    estoque: -10,
    tags: ["2", "motorola"]
}

const { error, value } = produtoSchema.validate(produto, { abortEarly: false, convert: false});
if (error) console.log(error.details);
console.log(value);
    