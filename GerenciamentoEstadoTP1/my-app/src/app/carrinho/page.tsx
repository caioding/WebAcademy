"use client";

// import { useState } from "react";
import ResumoCarrinho from "../components/ResumoCarrinho/ResumoCarrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinho";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";
import { useReducer } from "react";

export type Action =
  | { type: "aumentar_qtd"; id: string }
  | { type: "diminuir_qtd"; id: string }
  | { type: "remover"; id: string };

export function carrinhoReducer(state: ItemCarrinho[], action: Action) {
  switch (action.type) {
    case "aumentar_qtd":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      );
    case "diminuir_qtd":
      return state.map((item) =>
        item.id === action.id && item.quantidade > 0
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      );
    case "remover":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}

export default function Carrinho() {
  // const [itensCarrinho, setItensCarrinho] = useState(mockItensCarrinho);
  const [itensCarrinho, dispatch] = useReducer(
    carrinhoReducer,
    mockItensCarrinho
  );

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

  return (
    <main>
      <div className="container p-5">
        <ListagemCarrinho
          itensCarrinho={itensCarrinho}
          removerItemDoCarrinho={dispatch}
        />

        <ResumoCarrinho
          quantidadeItensTotal={totalItens}
          precoTotal={valorTotalCarrinho}
        />
      </div>
    </main>
  );
}
