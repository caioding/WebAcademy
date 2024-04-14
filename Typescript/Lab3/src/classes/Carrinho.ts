export interface IProduto {
    tipo: string;
    modelo: string;
    fabricante: string;
    valor: number;
}

export interface ICarrinho<T extends IProduto> {
    produtos: T[];
    adicionar(produto: T): void;
    valorTotal(): number;
}

export class Carrinho<T extends IProduto> implements ICarrinho<T> {
    produtos: T[] = [];

    adicionar(produto: T): void {
        this.produtos.push(produto);
    }

    valorTotal(): number {
        return this.produtos.reduce((total, produto) => total + produto.valor, 0);
    }
}