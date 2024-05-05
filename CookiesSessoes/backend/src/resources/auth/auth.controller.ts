import { Request, Response } from "express";
import { createUsuario } from "../usuario/usuario.service";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { checkCredentials, checkIsAdmin } from "./auth.service";

const signup = async (req: Request, res: Response) => {
    const usuario = req.body;
    try {
        const novoUsuario = await createUsuario(usuario, "cliente");
        res.status(StatusCodes.CREATED).json(novoUsuario);
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
};

const login = async (req: Request, res: Response) => {
  const { email, senha } = req.body;
  try {
    const usuario = await checkCredentials({ email, senha });
    if (!usuario)
      return res.status(401).json({ msg: "Email e/ou senha incorretos" });
    req.session.uid = usuario.id;
    const isAdmin = await checkIsAdmin(usuario.id);

    res.status(200).json({
      msg: "Usuário autenticado com sucesso",
      isAdmin,
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const logout = async (req: Request, res: Response) => {
    if ((req.session as any).uid) {
        req.session.destroy(() => {
            res.status(StatusCodes.OK).json(ReasonPhrases.OK);
        });
    } else {
        res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED);
    }
};

export default { signup, login, logout };