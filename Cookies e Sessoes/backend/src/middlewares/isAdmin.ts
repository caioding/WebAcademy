import { NextFunction, Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { TiposUsuaios } from "../../resources/tipoUsuario/tipoUsuario.model";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (req.sessions.tipoUsuarioId === TiposUsuaios.ADMIN) next();
    res.status(StatusCodes.FORBIDDEN).json({ ReasonPhrases.FORBIDDEN });