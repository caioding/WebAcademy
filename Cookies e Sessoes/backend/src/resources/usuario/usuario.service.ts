import { Prisma } from ".prisma/client";
import { genSalt, hash } from "bcryptjs";
import { CreateUsuarioDto, UsuarioDto, TipoUsusario } from "./usuario.types";
import { create } from "domain";

const prisma = new Prisma();

const createUsuario = async (
    usuario: CreateUsuarioDto, tipoUsuario: TipoUsusario
): Promise<UsuarioDto> => {
    const rounds = parseInt(process.env.BCRYPT_ROUNDS!)
    const salt = await genSalt(rounds);
    const senha = await hash(usuario.senha, salt);
    return await prisma.usuario.create({
        select: { id: true, nome: true, email: true, tipoUsuario: true, createdAt: true, updatedAt:},
        data: {
            ...usuario,
            senha,
            tipoUsuario === "admin" ? TiposUsuario.ADMIN : TiposUsuario.COMUM
    },
    });
};

export { createUsuario };