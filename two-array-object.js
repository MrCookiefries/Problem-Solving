// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
	const obj = {};
	for (const [i, key] of keys.entries()) {
		const val = values[i];
		obj[key] =
			val || null;
	}
	return obj;
}
