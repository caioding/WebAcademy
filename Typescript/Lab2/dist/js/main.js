import { Aluno } from './aluno.js';
import { Turma } from './turma.js';
const formAluno = document.getElementById('form-aluno');
const formEditarAluno = document.getElementById('form-editar-aluno');
const listaAlunos = document.getElementById('lista-alunos');
const turma = new Turma(1, 'Turma 1');
formAluno.addEventListener('submit', (event) => {
    event.preventDefault();
    const id = document.getElementById('id').valueAsNumber;
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const idade = document.getElementById('idade').valueAsNumber;
    const altura = document.getElementById('altura').valueAsNumber;
    const peso = document.getElementById('peso').valueAsNumber;
    // Verificar se o aluno com o mesmo ID já existe
    if (turma.getAluno(id)) {
        alert('Um aluno com este ID já existe.');
        return;
    }
    const aluno = new Aluno(id, nomeCompleto, idade, altura, peso);
    turma.addAluno(aluno);
    updateStats();
    displayAlunos();
});
formEditarAluno.addEventListener('submit', (event) => {
    event.preventDefault();
    const id = document.getElementById('editar-id').valueAsNumber;
    const nomeCompleto = document.getElementById('editar-nomeCompleto').value;
    const idade = document.getElementById('editar-idade').valueAsNumber;
    const altura = document.getElementById('editar-altura').valueAsNumber;
    const peso = document.getElementById('editar-peso').valueAsNumber;
    const aluno = turma.getAluno(id);
    if (aluno) {
        aluno.update({ nomeCompleto, idade, altura, peso });
    }
    formEditarAluno.style.display = 'none';
    updateStats();
    displayAlunos();
});
function updateStats() {
    document.getElementById('num-alunos').innerText = `Número de Alunos: ${turma.getNumAlunos()}`;
    document.getElementById('media-idades').innerText = `Média de Idades: ${turma.getMediaIdades()}`;
    document.getElementById('media-alturas').innerText = `Média de Alturas: ${turma.getMediaAlturas()}`;
    document.getElementById('media-pesos').innerText = `Média de Pesos: ${turma.getMediaPesos()}`;
}
function displayAlunos() {
    listaAlunos.innerHTML = '';
    turma.getAlunos().forEach(aluno => {
        const alunoDiv = document.createElement('div');
        alunoDiv.innerText = `${aluno.nomeCompleto} (ID: ${aluno.id})`;
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remover';
        removeButton.addEventListener('click', () => {
            turma.removeAluno(aluno.id);
            updateStats();
            displayAlunos();
        });
        const editButton = document.createElement('button');
        editButton.innerText = 'Editar';
        editButton.addEventListener('click', () => {
            document.getElementById('editar-id').value = aluno.id.toString();
            document.getElementById('editar-nomeCompleto').value = aluno.nomeCompleto;
            document.getElementById('editar-idade').value = aluno.idade.toString();
            document.getElementById('editar-altura').value = aluno.altura.toString();
            document.getElementById('editar-peso').value = aluno.peso.toString();
            formEditarAluno.style.display = 'block';
        });
        alunoDiv.appendChild(removeButton);
        alunoDiv.appendChild(editButton);
        listaAlunos.appendChild(alunoDiv);
    });
}
