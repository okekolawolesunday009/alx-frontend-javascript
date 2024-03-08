export default class Airport {
  constructor(name, code = 'SFO') {
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    if (typeof code !== 'string') {
      throw new Error('code must be a string');
    }
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
