import React from "react";
import Image from "next/image";
import CardProduto from "./CardProduto";

const ListagemProdutos = () => {
  return (
    <div>
      <h5 className="mb-3">Produtos disponíveis:</h5>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        <CardProduto />
      </div>
    </div>
  );
};

export default ListagemProdutos;
