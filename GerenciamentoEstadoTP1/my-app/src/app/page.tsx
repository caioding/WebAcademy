"use client";

import { useState, useEffect } from "react";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";

export default function App() {
  const [produtos, setProdutos] = useState<Produto[] | null>(null);
  const [quantidadeTotalItens, setQuantidadeTotalItens] = useState<number>(0);
  const [precoTotal, setPrecoTotal] = useState<number>(0);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((data) => setProdutos(data))
      .catch((error) => console.error("Error:", error));
  }, []);

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
          <p>Carregando...</p>
        )}
      </div>
    </main>
  );
}
