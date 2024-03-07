export default class HobertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string.');
    }
    if (typeof length !== 'number') {
      throw new Error('length must be an integer.');
    }
    if (!Array.isArray(students)) {
      throw new Error('Students must be an array.');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = value;
  }
}
