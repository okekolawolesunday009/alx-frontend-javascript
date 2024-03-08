export default class HolbertonClass {
	constructor(size, location) {
		if (typeof size !== 'number') {
			throw new Error('size must be a number')
		}
		if (typeof location !== 'string') {
			throw new Error('location must be a number')
                }
		this._size = size;
		this._location = location;

	}

	[Symbol.toPrimitive](hint) {
		if (hint === 'number') {
			return `${this._size}`;
		} else {
			return this._location;
		}
	}


}
