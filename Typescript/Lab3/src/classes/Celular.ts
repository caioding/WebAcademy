import { IProduto } from './Carrinho';

export class Celular implements IProduto {
    tipo: string = 'celular';

    constructor(
        public modelo: string,
        public memoria: string,
        public fabricante: string,
        public valor: number
    ) {}
}