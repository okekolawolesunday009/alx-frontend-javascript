import Building from "./5-building"

export default class SkyHighBuilding extends Building {
	constructor(sqft, floors){
		this._floors = floors;
		super(sqft);
	}
	get floors() {
		return this._floors;
	}
	get sqft() {
		return super.sqft;
	}
	evacuationWarningMessage(){
		return `Evacuate slowly the ${this._floors} floors.`;
	}
}

