export interface Student {
	readonly firstName: string;
	readonly lastName: string;
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
const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "pink";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  nameCell.style.border = "1px solid pink";
  locationCell.style.border = "1px solid pink";
  nameCell.style.padding = "5px";
  locationCell.style.padding = "5px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

document.body.appendChild(table);

