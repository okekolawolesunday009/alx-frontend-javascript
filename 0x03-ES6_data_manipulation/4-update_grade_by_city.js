
export default function updateStudentGradeByCity(array, city, newGrade) {
	//var finalGrade = [];
	if (!Array.isArray(array)) {
		return ([]);

	}
	const newArray = array.filter(student => city === student.location);

	newArray.forEach(student => {
		const matchGrade = newGrade.find(newStudent => newStudent.studentId === student.id);
		if (matchGrade && !student.hasOwnProperty('grade')) {
			student.grade = matchGrade.grade;
		} else {
			student.grade = 'N/A';
		}
	});
	return newArray;
}
