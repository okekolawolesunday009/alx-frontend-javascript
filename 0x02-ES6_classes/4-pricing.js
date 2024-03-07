import Currency from "./3-currency"

export default class Pricing {
	constructor(amount, Currency) {
		this._amount = amount;
		this._currency = Currency;
	}
	get amount() {
		return this._amount;
	}
	set amount (value) {
		return this._amount = value;
	}
	get currency() {
		return this._currency;
	}
	set currency(code. name) {
		return this._currency = 
	}
	displayFullPrice() {
		return `${this._amount} ${this._currency} (${this._currency.code})`;
	}

	static conversionRate(amount, conversionRate) {
		return (amount * conversionRate);
	}
}
