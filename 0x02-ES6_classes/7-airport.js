export default class Airport {
  constructor(name, code = 'SFO') {
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = name;
    this._code = code;
  }
}
