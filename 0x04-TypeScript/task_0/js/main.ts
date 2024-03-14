interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}
const studentOne: Student = {
	firstName: "kola",
	lastName: "oke",
	age: 20,
	location: "ota"
};

const studentTwo: Student = {
        firstName: "kola",
        lastName: "oke",
        age: 20,
        location: "ota"
}
const studentsList: Student[] = [studentTwo, studentOne];
console.log(studentsList)

