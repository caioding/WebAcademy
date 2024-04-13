export class Aluno {
    constructor(
        public id: number,
        public nomeCompleto: string,
        public idade: number,
        public altura: number,
        public peso: number
    ) {}

    update(data: Partial<Aluno>) {
        Object.assign(this, data);
    }
}