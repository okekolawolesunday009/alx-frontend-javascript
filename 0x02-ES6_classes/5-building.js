export default class Buiding {
	constructor(sqft = 0) {
		if (this.contructor !== Building
			&& typeof this.evacuationWarningMessage != 'function') {
			throw new Error('Class extending Building must override evacuationWarningMessage');
	}
		this._sqft = sqft;
	}
	get sqft(value) {
		return this._sqft;
	}

}
