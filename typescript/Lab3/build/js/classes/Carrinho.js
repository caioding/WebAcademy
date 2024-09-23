// Define a classe Carrinho que implementa a interface ICarrinho
export class Carrinho {
    constructor() {
        this.produtos = []; // Inicializa a lista de produtos como vazia
    }
    // Implementa o método adicionar da interface ICarrinho
    // Adiciona um produto à lista de produtos
    adicionar(produto) {
        this.produtos.push(produto);
    }
    // Implementa o método valorTotal da interface ICarrinho
    // Calcula o valor total dos produtos no carrinho
    valorTotal() {
        return this.produtos.reduce((total, produto) => total + produto.valor, 0);
    }
}
