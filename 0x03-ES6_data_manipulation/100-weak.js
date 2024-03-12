export const WeakMap = new WeakMap();
export function queryAPI (endpoint){
	const {protocol, name} = endpoint;
	const url = `${protocol}://example.com/api/${name}`;
	return url;
}
