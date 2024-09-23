import Joi from 'joi';
import { TiposUsuarios } from '../tipoUsuario/tipoUsuario.constants';

export const CreateUsuarioSchema = Joi.object({
  nome: Joi.string().required(),
  email: Joi.string().email().required(),
  senha: Joi.string().required(),
  tipoUsuarioId: Joi.string().valid(TiposUsuarios.ADMIN, TiposUsuarios.CLIENT).required(),
});

export const UpdateUsuarioSchema = Joi.object({
  nome: Joi.string(),
  email: Joi.string().email(),
  senha: Joi.string(),
  tipoUsuarioId: Joi.string().valid(TiposUsuarios.ADMIN, TiposUsuarios.CLIENT),
});