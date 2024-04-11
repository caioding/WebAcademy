"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classroom = void 0;
class Classroom {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.students = [];
    }
    getNumStudents() {
        return this.students.length;
    }
    getAverageAge() {
        return this.students.reduce((sum, student) => sum + student.age, 0) / this.getNumStudents();
    }
    getAverageHeight() {
        return this.students.reduce((sum, student) => sum + student.height, 0) / this.getNumStudents();
    }
    getAverageWeight() {
        return this.students.reduce((sum, student) => sum + student.weight, 0) / this.getNumStudents();
    }
}
exports.Classroom = Classroom;
