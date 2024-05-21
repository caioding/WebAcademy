"use client";

import ListagemFavoritos from "../components/ListagemFavoritos/ListagemFavoritos";
import { useFavoritosContext, useProdutosFavoritos } from "../hooks";

export default function Favoritos() {
  const { setFavoritos } = useFavoritosContext();
  const favoritos = useProdutosFavoritos();
  return (
    <main>
      <div className="container p-5">
        <ListagemFavoritos
          produtosFavoritos={favoritos}
          setFavoritos={setFavoritos}
        />
      </div>
    </main>
  );
}
