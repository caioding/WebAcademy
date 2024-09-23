export class Turma {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.alunos = [];
    }
    addAluno(aluno) {
        this.alunos.push(aluno);
    }
    removeAluno(id) {
        this.alunos = this.alunos.filter(aluno => aluno.id !== id);
    }
    getAluno(id) {
        return this.alunos.find(aluno => aluno.id === id);
    }
    getNumAlunos() {
        return this.alunos.length;
    }
    getMediaIdades() {
        const total = this.alunos.reduce((sum, aluno) => sum + aluno.idade, 0);
        return total / this.getNumAlunos();
    }
    getMediaAlturas() {
        const total = this.alunos.reduce((sum, aluno) => sum + aluno.altura, 0);
        return total / this.getNumAlunos();
    }
    getMediaPesos() {
        const total = this.alunos.reduce((sum, aluno) => sum + aluno.peso, 0);
        return total / this.getNumAlunos();
    }
    getAlunos() {
        return this.alunos;
    }
}
