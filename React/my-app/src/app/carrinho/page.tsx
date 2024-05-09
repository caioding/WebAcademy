"use client";

import { useReducer, useState } from "react";
import ResumoCarrinho from "../components/ResumoCarrinho/ResumoCarrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinho";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";

export default function Carrinho() {
  const [itensCarrinho, setItensCarrinho] = useState(mockItensCarrinho);

  const totalItens: number = itensCarrinho.reduce(
    (total: number, item: ItemCarrinho) => {
      return total + item.quantidade;
    },
    0
  );

  const valorTotalCarrinho: number = itensCarrinho.reduce(
    (total: number, item: ItemCarrinho) => {
      return total + item.preco * item.quantidade;
    },
    0
  );

  const removerItemCarrinho = (id: string) => {
    setItensCarrinho((itensCarrinho) =>
      itensCarrinho.filter((item) => item.id != id)
    );
  };

  return (
    <main>
      <div className="container p-5">
        <ListagemCarrinho
          itensCarrinho={itensCarrinho}
          removerItemDoCarrinho={removerItemCarrinho}
        />

        <ResumoCarrinho
          quantidadeItensTotal={totalItens}
          precoTotal={valorTotalCarrinho}
        />
      </div>
    </main>
  );
}
