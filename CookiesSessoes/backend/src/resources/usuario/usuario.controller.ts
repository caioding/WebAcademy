import { Request, Response } from "express";
import {
  getUsuarios,
  buscaUsuarioPorEmail,
  buscaUsuarioPorId,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} from "./usuario.service";
import { TipoUsusario, UsuarioDto } from "./usuario.types";
import { CreateUsuarioDto } from "./usuario.types";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants";

const index = async (req: Request, res: Response) => {
  const tipo = req.query.tipo as TiposUsuarios | undefined;
  try {
    const usuarios = await getUsuarios(tipo);
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json(error);
  }
};

const create = async (req: Request, res: Response) => {
  const usuario = req.body as CreateUsuarioDto;
  const tipoUsuario = req.query.tipoUsuario as TipoUsusario;
  try {
    if (await buscaUsuarioPorEmail(usuario.email))
      return res
        .status(400)
        .json({ msg: "Erro, usuário com o email já informado." });
    const newUsuario = await createUsuario(usuario, tipoUsuario);
    res.status(201).json(newUsuario);
  } catch (error){
    res.status(500).json(error);
  }
};

const read = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const usuario = await buscaUsuarioPorId(id);
    if (!usuario)
      return res.status(400).json({ msg: "Não existe este usuário." });
    res.status(200).json(usuario);
  } catch (error){
    res.status(500).json(error);
  }
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuario = req.body;
  try {
    if (!(await buscaUsuarioPorId(id)))
      return res.status(400).json({ msg: "Não existe este usuário." });
    await updateUsuario(id, usuario);
    res.status(200).json({ msg: "Sucesso ao atualizar usuário." });
  } catch (error){
    res.status(500).json(error);
  }
};

const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (!(await buscaUsuarioPorId(id)))
      return res.status(400).json({ msg: "Não existe este usuário." });
    await deleteUsuario(id);
    res.status(200).json({ msg: "Sucesso ao deletar usuário." });
  } catch (error){
    res.status(500).json(error);
  }
};
export default { index, create, read, update, remove };
