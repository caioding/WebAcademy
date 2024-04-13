import { Aluno } from './aluno';
import { Turma } from './turma';

const formAluno = document.getElementById('form-aluno') as HTMLFormElement;
const formEditarAluno = document.getElementById('form-editar-aluno') as HTMLFormElement;
const listaAlunos = document.getElementById('lista-alunos') as HTMLDivElement;
const turma = new Turma(1, 'Turma 1');

formAluno.addEventListener('submit', (event) => {
    event.preventDefault();

    const id = (document.getElementById('id') as HTMLInputElement).valueAsNumber;
    const nomeCompleto = (document.getElementById('nomeCompleto') as HTMLInputElement).value;
    const idade = (document.getElementById('idade') as HTMLInputElement).valueAsNumber;
    const altura = (document.getElementById('altura') as HTMLInputElement).valueAsNumber;
    const peso = (document.getElementById('peso') as HTMLInputElement).valueAsNumber;

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

    const id = (document.getElementById('editar-id') as HTMLInputElement).valueAsNumber;
    const nomeCompleto = (document.getElementById('editar-nomeCompleto') as HTMLInputElement).value;
    const idade = (document.getElementById('editar-idade') as HTMLInputElement).valueAsNumber;
    const altura = (document.getElementById('editar-altura') as HTMLInputElement).valueAsNumber;
    const peso = (document.getElementById('editar-peso') as HTMLInputElement).valueAsNumber;

    const aluno = turma.getAluno(id);
    if (aluno) {
        aluno.update({ nomeCompleto, idade, altura, peso });
    }

    formEditarAluno.style.display = 'none';
    updateStats();
    displayAlunos();
});

function updateStats() {
    (document.getElementById('num-alunos') as HTMLParagraphElement).innerText = `Número de Alunos: ${turma.getNumAlunos()}`;
    (document.getElementById('media-idades') as HTMLParagraphElement).innerText = `Média de Idades: ${turma.getMediaIdades()}`;
    (document.getElementById('media-alturas') as HTMLParagraphElement).innerText = `Média de Alturas: ${turma.getMediaAlturas()}`;
    (document.getElementById('media-pesos') as HTMLParagraphElement).innerText = `Média de Pesos: ${turma.getMediaPesos()}`;
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
            (document.getElementById('editar-id') as HTMLInputElement).value = aluno.id.toString();
            (document.getElementById('editar-nomeCompleto') as HTMLInputElement).value = aluno.nomeCompleto;
            (document.getElementById('editar-idade') as HTMLInputElement).value = aluno.idade.toString();
            (document.getElementById('editar-altura') as HTMLInputElement).value = aluno.altura.toString();
            (document.getElementById('editar-peso') as HTMLInputElement).value = aluno.peso.toString();
            formEditarAluno.style.display = 'block';
        });
        alunoDiv.appendChild(removeButton);
        alunoDiv.appendChild(editButton);
        listaAlunos.appendChild(alunoDiv);
    });
}