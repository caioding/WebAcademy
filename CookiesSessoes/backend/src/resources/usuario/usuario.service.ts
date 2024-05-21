import { PrismaClient } from "@prisma/client";
import {
  CreateUsuarioDto,
  UsuarioDto,
  TipoUsusario,
  UpdateUsuarioDto,
} from "./usuario.types";
import { genSalt, hash } from "bcryptjs";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants";

const prisma = new PrismaClient();

export async function getUsuarios(tipo?: TiposUsuarios): Promise<UsuarioDto[]> {
  if (!tipo)
    return prisma.usuario.findMany({
      select: {
        id: true,
        tipoUsuarioId: true,
        nome: true,
        email: true,
        createAd: true,
        updateAt: true,
      },
    });
  return prisma.usuario.findMany({
    where: { tipoUsuarioId: tipo },
    select: {
      id: true,
      tipoUsuarioId: true,
      nome: true,
      email: true,
      createAd: true,
      updateAt: true,
    },
  });
}

export const createUsuario = async (
  usuario: CreateUsuarioDto,
  tipoUsuario: TipoUsusario
): Promise<UsuarioDto> => {
  const rounds = parseInt(process.env.BCRYPT_ROUNDS!);
  const salt = await genSalt(10);
  const senha = await hash(usuario.senha, salt);
  const newUsuario = await prisma.usuario.create({
    data: {
      ...usuario,
      senha,
      tipoUsuarioId:
        tipoUsuario === "admin" ? TiposUsuarios.ADMIN : TiposUsuarios.CLIENT,
    },
  });
  return {
    id: newUsuario.id,
    tipoUsuarioId: newUsuario.tipoUsuarioId,
    nome: newUsuario.nome,
    email: newUsuario.email,
    createAd: newUsuario.createAd,
    updateAt: newUsuario.updateAt,
  };
};

export const updateUsuario = async (
  id: string,
  usuario: UpdateUsuarioDto
): Promise<UsuarioDto> => {
  const updatedUsuario = await prisma.usuario.update({
    data: usuario,
    where: { id },
  });
  return {
    id: updatedUsuario.id,
    tipoUsuarioId: updatedUsuario.tipoUsuarioId,
    nome: updatedUsuario.nome,
    email: updatedUsuario.email,
    createAd: updatedUsuario.createAd,
    updateAt: updatedUsuario.updateAt,
  };
};

export const deleteUsuario = async (id: string): Promise<UsuarioDto> => {
  const deletedUsuario = await prisma.usuario.delete({ where: { id } });
  return {
    id: deletedUsuario.id,
    tipoUsuarioId: deletedUsuario.tipoUsuarioId,
    nome: deletedUsuario.nome,
    email: deletedUsuario.email,
    createAd: deletedUsuario.createAd,
    updateAt: deletedUsuario.updateAt,
  };
};

export const buscaUsuarioPorEmail = async (
  email: string
): Promise<UsuarioDto | null> => {
  return await prisma.usuario.findUnique({
    select: {
      id: true,
      tipoUsuarioId: true,
      nome: true,
      email: true,
      createAd: true,
      updateAt: true,
    },
    where: { email },
  });
};

export const buscaUsuarioPorId = async (
  id: string
): Promise<UsuarioDto | null> => {
  return await prisma.usuario.findUnique({
    select: {
      id: true,
      tipoUsuarioId: true,
      nome: true,
      email: true,
      createAd: true,
      updateAt: true,
    },
    where: { id },
  });
};
