// TV.ts
import { IProduto } from './Carrinho';

export class TV implements IProduto {
    tipo: string = 'tv';

    constructor(
        public modelo: string,
        public resolucao: string,
        public tamanho: number,
        public fabricante: string,
        public valor: number
    ) {}
}