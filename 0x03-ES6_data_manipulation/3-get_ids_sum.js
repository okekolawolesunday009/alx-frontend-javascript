export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return ([]);
  }
  const sum = 0;

  return students.reduce((index, student) => student.id + index, sum);
}
