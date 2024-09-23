import { useContext } from "react";
import { FavoritosContext } from "./FavoritosContext";

export function useFavoritosContext() {
  return useContext(FavoritosContext);
}

export function useProdutosFavoritos() {
  const { favoritos } = useContext(FavoritosContext);
  return favoritos;
}

export function useVerificaProdutoFavorito(id: string) {
  const { favoritos } = useContext(FavoritosContext);
  return favoritos.some((produto) => produto.id === id);
}
