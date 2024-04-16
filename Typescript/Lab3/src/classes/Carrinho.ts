// Define a interface IProduto que representa um produto
export interface IProduto {
    tipo: string; // Tipo do produto
    modelo: string; // Modelo do produto
    fabricante: string; // Fabricante do produto
    valor: number; // Valor do produto
}

// Define a interface ICarrinho que representa um carrinho de compras
// O carrinho pode conter qualquer tipo de produto que estenda IProduto
export interface ICarrinho<T extends IProduto> {
    produtos: T[]; // Lista de produtos no carrinho
    adicionar(produto: T): void; // Método para adicionar um produto ao carrinho
    valorTotal(): number; // Método para calcular o valor total dos produtos no carrinho
}

// Define a classe Carrinho que implementa a interface ICarrinho
export class Carrinho<T extends IProduto> implements ICarrinho<T> {
    produtos: T[] = []; // Inicializa a lista de produtos como vazia

    // Implementa o método adicionar da interface ICarrinho
    // Adiciona um produto à lista de produtos
    adicionar(produto: T): void {
        this.produtos.push(produto);
    }

    // Implementa o método valorTotal da interface ICarrinho
    // Calcula o valor total dos produtos no carrinho
    valorTotal(): number {
        return this.produtos.reduce((total, produto) => total + produto.valor, 0);
    }
}