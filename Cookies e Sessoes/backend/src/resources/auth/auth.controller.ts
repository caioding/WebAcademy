import { Request, Response } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { createUsuario } from '../usuario/usuario.service';

const signIn = async (req: Request, res: Response) => {
    const usuario = req.body;
    try {
        const novoUsuario = await createUsuario(usuario, "comum");
        res.status(StatusCodes.CREATED).json(novoUsuario);
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
}

const login = async (req: Request, res: Response) => {
    const credentials = req.body;
    try {
        const usuario = await checkCredentials(credentials);
        if (!usuario)
            return res
                .status(StatusCodes.UNAUTHORIZED)
                .json({ ReasonPhrases.UNAUTHORIZED });
        req.sessions.uid = usuario.id;
        req.sessions.tipoUsuarioId = usuario.tipoUsuarioId;
        res.status(StatusCodes.OK).json(usuario);
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
    
const logout = async (req: Request, res: Response) => {
    if (req.sessions.uid) {
        req.sessios.destroy(() => {
            res.status(StatusCodes.OK).json({ ReasonPhrases.OK });
            else {
                rest
}

export default { signIn, login, logout };
