import api from "./api";

export async function getListaProdutos(): Promise<Produto[]> {
  return api.get("/produto").then((response) => response.data);
}
