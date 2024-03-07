export default class SkyHighBuilding extends Building {
	contructor(sqft, floors){
		this._floors = floors;
		super(sqft);
	}
	get floors() {
		return this._floors;
	}
	get sqft() {
		return this._sqft;
	}
	evacuationWarningMessage(){
		return `Evacuate slowly the ${this._floors} floors.`;
	}
}

