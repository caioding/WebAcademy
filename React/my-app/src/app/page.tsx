"use client";
import Image from "next/image";
import { Produto } from "@/types/produto";
import React, { useEffect, useState } from "react";

import Navbar from "./components/navbar";
import ResumoCarrinho from "./components/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos";

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[] | null>(null);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);
  return (
    <>
      <main>
        <div className="container p-5">
          <ResumoCarrinho />
          <ListagemProdutos />
        </div>
      </main>
    </>
  );
}
