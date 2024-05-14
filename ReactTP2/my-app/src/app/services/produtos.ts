import api from './api';

export async function getListaProdutos() : Promise<Produto[]> {
  return api.get("/produtos").then((response) => response.data);
}

import axios from 'axios';

export async function getDetalhesProduto(produtoId: string) {
  const response = await axios.get(`/produto/${produtoId}`);
  return response.data;
}