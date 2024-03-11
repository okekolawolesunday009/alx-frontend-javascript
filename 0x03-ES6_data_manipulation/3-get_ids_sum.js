import getListStudents from './0-get_list_students';

export default function getStudentIdsSum(students) {
        if (!Array.isArray(students)) {
                return ([]);
        }
	var sum = 0;

        return students.reduce((index, student) => student.id + index, sum);
}

