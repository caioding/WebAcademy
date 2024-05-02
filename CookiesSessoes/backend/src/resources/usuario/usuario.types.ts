import { Usuario } from "@prisma/client";

export type CreateUsuarioDto = Pick<Usuario, "nome" | "email" | "senha" | "id" | "tipoUsuarioId" | "createAd" | "updateAt">;
export type UsuarioDto = Omit<Usuario, "senha">;
export type TipoUsusario = "cliente" | "admin";