import { PrismaClient } from "@prisma/client";
import { LoginDto } from ".auth.types";
import { UsuarioDto } from "../usuario/usuario.types";
import { compare } from "bcryptjs";

const prisma = new PrismaClient();

export const checkCredentials = async (
  credentials: LoginDto
): Promise<UsuarioDto | null> => {
  const usuario = prisma.usuario.findUnique({
    Where: { email: credentials.email },
  });
  if (!usuario) return null;
  const ok = await compare(credentials.senha, usuario.senha);
  if (!ok) return null;
  return {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
    tipoUsuarioId: usuario.tipoUsuarioId,
    createdAt: usuario.createdAt,
    updatedAt: usuario.updatedAt,
  };
};
