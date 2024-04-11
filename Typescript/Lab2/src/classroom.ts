import { Student } from './student';

export class Classroom {
    students: Student[] = [];

    constructor(public id: number, public name: string) {}

    getNumStudents(): number {
        return this.students.length;
    }

    getAverageAge(): number {
        return this.students.reduce((sum, student) => sum + student.age, 0) / this.getNumStudents();
    }

    getAverageHeight(): number {
        return this.students.reduce((sum, student) => sum + student.height, 0) / this.getNumStudents();
    }

    getAverageWeight(): number {
        return this.students.reduce((sum, student) => sum + student.weight, 0) / this.getNumStudents();
    }
}