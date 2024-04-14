// Bicicleta.ts
import { IProduto } from './Carrinho';

export class Bicicleta implements IProduto {
    tipo: string = 'bicicleta';

    constructor(
        public modelo: string,
        public tamanhoAro: number,
        public fabricante: string,
        public valor: number
    ) {}
}