import { PrismaClient } from "@prisma/client";
import { CreateUsuarioDto, UsuarioDto, TipoUsusario } from "./usuario.types";
import { genSalt, hash } from "bcryptjs";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants";

const prisma = new PrismaClient();

export const createUsuario = async (
    usuario: CreateUsuarioDto, tipoUsuario: TipoUsusario
): Promise<UsuarioDto> => {
    const rounds = parseInt(process.env.BCRYPT_ROUNDS!);
    const salt = await genSalt(10);
    const senha = await hash(usuario.senha, salt);
    return await prisma.usuario.create({
        select: { id: true, nome: true, email: true, tipoUsuarioId: true, createAd: true, updateAt: true },
        data: {
            ... usuario,
            senha,
            tipoUsuarioId: tipoUsuario === "admin" ? TiposUsuarios.ADMIN : TiposUsuarios.CLIENT,
        },
    })
};