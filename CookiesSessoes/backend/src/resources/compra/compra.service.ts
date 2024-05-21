import { PrismaClient } from "@prisma/client";
import { ProdutoCarrinho } from "./compra.types";

const prisma = new PrismaClient();

export async function salvarCompra(
  produtosCarrinho: ProdutoCarrinho[],
  uid: string
) {
  const novaCompra = await prisma.compra.create({
    data: {
      usuarioId: uid,
    },
  });
  produtosCarrinho.forEach(
    async (produtoCarrinho) => await salvarItem(produtoCarrinho, novaCompra.id)
  );
}

async function salvarItem(produtoCarrinho: ProdutoCarrinho, compraId: string) {
  await prisma.compraProduto.create({
    data: {
      compraId,
      produtoId: produtoCarrinho.id,
      quantidade: produtoCarrinho.quantidade,
    },
  });
}
