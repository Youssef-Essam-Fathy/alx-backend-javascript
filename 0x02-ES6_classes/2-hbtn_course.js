export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else console.error('TypeError: Name must be a string');
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength === 'number') {
      this._name = newLength;
    } else console.error('TypeError: Length must be a number');
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (typeof newStudents === 'object') {
      this._name = newStudents;
    } else console.error('TypeError: Students must be an array');
  }
}
