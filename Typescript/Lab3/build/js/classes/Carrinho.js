export class Carrinho {
    constructor() {
        this.produtos = [];
    }
    adicionar(produto) {
        this.produtos.push(produto);
    }
    valorTotal() {
        return this.produtos.reduce((total, produto) => total + produto.valor, 0);
    }
}
