export default function updateStudentGradeByCity(array, city, newGrade) {
  // var finalGrade = [];
  if (!Array.isArray(array)) {
    return ([]);
  }
  const newArray = array.filter((student) => city === student.location);

  const updateArray = newArray.forEach((student) => {
    const matchGrade = newGrade.find((newStudent) => newStudent.studentId === student.id);
    const grade = matchGrade ? matchGrade.grade : 'N/A';
    return { ...student, grade };
  });
  return updateArray;
}
