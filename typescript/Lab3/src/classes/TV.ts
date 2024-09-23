// Importa a interface IProduto do arquivo Carrinho.ts
import { IProduto } from './Carrinho';

// Define a classe TV que implementa a interface IProduto
export class TV implements IProduto {
    tipo: string = 'tv'; // Define o tipo do produto como 'tv'

    // Define o construtor da classe
    constructor(
        public modelo: string, 
        public resolucao: string, 
        public tamanho: number,
        public fabricante: string,
        public valor: number
    ) {}
}