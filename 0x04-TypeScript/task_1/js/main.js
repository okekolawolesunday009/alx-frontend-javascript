var teacherA = {
    firstName: 'oke',
    lastName: 'oke',
    fullTimeEmployee: true,
    contract: false,
    location: 'ota'
};
console.log(teacherA);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: "ota",
    numberOfReports: 17
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    console.log(firstName[0] + "." + lastName);
};
printTeacher("John", "Doe");
