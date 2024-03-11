export default function createInt8TypedArray(len, position, val) {
	//let int8Array = new Int8Array(len);
	let buffer = new ArrayBuffer(len);
	let dataView = new DataView(buffer);

	if (position >= 0 && position < len) {
		//int8Array[position] = val;
		dataView.setInt8(position, val);
	} else {
		throw new Error("position outside range");
	}
	//return int8Array;
	return dataView;
}
