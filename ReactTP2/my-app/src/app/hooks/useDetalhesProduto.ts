import { useQuery } from "@tanstack/react-query";
import { getDetalhesProduto } from "../services/produtos";

export function useDetalhesProduto(produtoId: string) {
  return useQuery(['produto', produtoId], () => getDetalhesProduto(produtoId));
}