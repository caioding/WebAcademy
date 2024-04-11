"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student");
const classroom_1 = require("./classroom");
let classroom = new classroom_1.Classroom(1, 'Physical Education');
function addStudent(id, fullName, age, height, weight) {
    let student = new student_1.Student(id, fullName, age, height, weight);
    classroom.students.push(student);
    updateStats();
}
function editStudent(id, fullName, age, height, weight) {
    let student = classroom.students.find(student => student.id === id);
    if (student) {
        student.fullName = fullName;
        student.age = age;
        student.height = height;
        student.weight = weight;
        updateStats();
    }
}
function deleteStudent(id) {
    classroom.students = classroom.students.filter(student => student.id !== id);
    updateStats();
}
function updateStats() {
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
