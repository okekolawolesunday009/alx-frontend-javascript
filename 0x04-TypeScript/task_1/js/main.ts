
export interface Teacher {
      firstName: string;
      fullTimeEmployee: boolean;
      lastName: string;
      yearsOfExperience?: number;
      location: string;
      [key: string]: string | number | boolean;
}

const teacherA: Teacher = {
	firstName: 'oke',
	lastName: 'oke',
	fullTimeEmployee: true,
	contract: false,
	location: 'ota'
};
console.log(teacherA);

export interface Directors extends Teacher {
	numberOfReports: number;
}

const director1: Directors = {
	firstName: 'John',
        lastName: 'Doe',
        fullTimeEmployee: true,
        location: "ota",
	numberOfReports: 17
}
console.log(director1);


export interface PrintTeacher {
    firstName: string;
    lastName: string;
}
export interface PrintTeacherFunction {
	(firstName: string, lastName: string):void;
}
const printTeacher: PrintTeacherFunction = function(firstName: string, lastName: string): void {
	console.log(`${firstName[0]}.${lastName}`)
}
printTeacher("John", "Doe");

interface Student {
    firstName: string;
    lastName: string;
    workOnHomeWork(): string;
    display(): string;
}

class StudentClass implements Student {

	constructor(public firstName: string, public lastName: string){
	}
	workOnHomeWork(): string{
		return "Currently working";
	}
	display(): string {
		return `${this.firstName}`
	}
}
const teacherAB = new StudentClass("kola", "sunday");
console.log(`${teacherAB.display()} is ${teacherAB.workOnHomeWork()}`);

