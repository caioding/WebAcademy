import { Request, Response } from 'express';
import { createUsuario } from './usuario.service';
import { TipoUsusario } from './usuario.types';
import { StatusCodes } from 'http-status-codes';

const index = async (req: Request, res: Response) => {};
const create = async (req: Request, res: Response) => {
    const usuario = req.body;
    const tipoUsuario = req.query.tipoUsuario as TipoUsusario;
    try {
        const novoUsuario = await createUsuario(usuario, tipoUsuario);
        res.status(StatusCodes.OK).json(novoUsuario);
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err});
    }
};
const read = async (req: Request, res: Response) => {};
const update = async (req: Request, res: Response) => {};
const remove = async (req: Request, res: Response) => {};

export default { index, create, read, update, remove}