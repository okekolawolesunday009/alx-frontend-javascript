export default function updateStudentGradeByCity(array, city, newGrade) {
  // var finalGrade = [];
  if (!Array.isArray(array)) {
    return ([]);
  }
  const newArray = array.filter((student) => city === student.location);

  newArray.forEach((student) => {
    const matchGrade = newGrade.find((newStudent) => newStudent.studentId === student.id);
    student.grade = matchGrade ? matchGrade.grade : 'N/A';
  });
  return newArray;
}
