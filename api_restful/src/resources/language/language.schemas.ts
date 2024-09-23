import Joi from "joi";

export const languageSchema = Joi.object().keys({
    lang: Joi.valid('pt-BR', 'en-US').required().messages({
        'any.only': 'Linguagem deve ser pt-BR ou en-US'
    })
})