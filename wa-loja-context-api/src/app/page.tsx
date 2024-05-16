"use client";

import React, { createContext, useState } from "react";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import { mockProdutos } from "./mocks/produtos";
import { FavoritosContext } from "./FavoritosContext";

export default function App() {
  const produtos = mockProdutos;
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  return (
    <main>
      <div className="container p-5">
        <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
          <ListagemProdutos
            produtos={produtos}
            // favoritos={favoritos}
            // setFavoritos={setFavoritos}
          />
        </FavoritosContext.Provider>
      </div>
    </main>
  );
}
