import getListStudents from './0-get_list_students';

export default function getListStudentIds(array) {
	if (!Array.isArray(array)) {
		return ([]);
	}

	return array.map(student => student.id)
}
