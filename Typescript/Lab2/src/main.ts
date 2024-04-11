import { Student } from './student';
import { Classroom } from './classroom';

let classroom = new Classroom(1, 'Physical Education');

function addStudent(id: number, fullName: string, age: number, height: number, weight: number): void {
    let student = new Student(id, fullName, age, height, weight);
    classroom.students.push(student);
    updateStats();
}

function editStudent(id: number, fullName: string, age: number, height: number, weight: number): void {
    let student = classroom.students.find(student => student.id === id);
    if (student) {
        student.fullName = fullName;
        student.age = age;
        student.height = height;
        student.weight = weight;
        updateStats();
    }
}

function deleteStudent(id: number): void {
    classroom.students = classroom.students.filter(student => student.id !== id);
    updateStats();
}

function updateStats(): void {
    const numAlunosElement = document.getElementById('numAlunos');
    if (numAlunosElement) {
        numAlunosElement.textContent = classroom.getNumStudents().toString();
    }

    const mediaIdadesElement = document.getElementById('mediaIdades');
    if (mediaIdadesElement) {
        mediaIdadesElement.textContent = classroom.getAverageAge().toFixed(2);
    }

    const mediaAlturasElement = document.getElementById('mediaAlturas');
    if (mediaAlturasElement) {
        mediaAlturasElement.textContent = classroom.getAverageHeight().toFixed(2);
    }

    const mediaPesosElement = document.getElementById('mediaPesos');
    if (mediaPesosElement) {
        mediaPesosElement.textContent = classroom.getAverageWeight().toFixed(2);
    }
}