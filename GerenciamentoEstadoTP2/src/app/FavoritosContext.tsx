"use client";

import React, { createContext, useState, ReactNode } from "react";

interface IFavoritosContext {
  favoritos: Produto[];
  setFavoritos: React.Dispatch<React.SetStateAction<Produto[]>>;
}

export const FavoritosContext = createContext<IFavoritosContext>({
  favoritos: [],
  setFavoritos: () => {},
});

interface FavoritosProviderProps {
  children: ReactNode;
}

export function FavoritosProvider({ children }: FavoritosProviderProps) {
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  return (
    <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
}
