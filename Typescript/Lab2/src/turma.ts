import { Aluno } from './aluno';

export class Turma {
    private alunos: Aluno[] = [];

    constructor(
        public id: number,
        public nome: string
    ) {}

    addAluno(aluno: Aluno) {
        this.alunos.push(aluno);
    }

    removeAluno(id: number) {
        this.alunos = this.alunos.filter(aluno => aluno.id !== id);
    }

    getAluno(id: number): Aluno | undefined {
        return this.alunos.find(aluno => aluno.id === id);
    }

    getNumAlunos(): number {
        return this.alunos.length;
    }

    getMediaIdades(): number {
        const total = this.alunos.reduce((sum, aluno) => sum + aluno.idade, 0);
        return total / this.getNumAlunos();
    }

    getMediaAlturas(): number {
        const total = this.alunos.reduce((sum, aluno) => sum + aluno.altura, 0);
        return total / this.getNumAlunos();
    }

    getMediaPesos(): number {
        const total = this.alunos.reduce((sum, aluno) => sum + aluno.peso, 0);
        return total / this.getNumAlunos();
    }

    getAlunos(): Aluno[] {
        return this.alunos;
    }
}