"use client";
import React from "react";

import Navbar from "../components/navbar";
import ListagemCarrinho from "../components/ListagemCarrinho";
import ResumoCarrinho from "../components/ResumoCarrinho";

export default function Carrinho() {
  return (
    <>
      <main>
        <div className="container p-5">
          <ListagemCarrinho />
          <ResumoCarrinho />
        </div>
      </main>
    </>
  );
}