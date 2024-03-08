export default class displayFullCurrency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new Error('code must be a string');
    }
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }

    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new Error('code must be a string');
    }

    this._code = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
