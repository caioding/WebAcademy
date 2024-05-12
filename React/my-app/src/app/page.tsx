"use client";

import { useState } from "react";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import { mockProdutos } from "./mocks/produtos";

export default function App() {
  const produtos = mockProdutos;
  const [quantidadeTotalItens, setQuantidadeTotalItens] = useState<number>(0);
  const [precoTotal, setPrecoTotal] = useState<number>(0);

  const adicionarAoCarrinho = (produto: Produto) => {
    setQuantidadeTotalItens(quantidadeTotalItens + 1);
    setPrecoTotal(precoTotal + Number(produto.preco));
  };

  return (
    <main>
      <div className="container p-5">
        <ResumoCarrinho
          quantidadeItensTotal={quantidadeTotalItens}
          precoTotal={precoTotal}
        />

        {produtos ? (
          <ListagemProdutos
            produtos={produtos}
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
}
