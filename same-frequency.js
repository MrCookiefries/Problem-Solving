// add whatever parameters you deem necessary
function sameFrequency(x, y) {
	const getMap = num => {
		const map = new Map();
		for (const val of `${num}`) {
			map.set(val, map.get(val) + 1 || 1);
		}
		return map;
	};
	x = getMap(x);
	y = getMap(y);
	if (x.size !== y.size) return false;
	for (const [num, count] of x.entries()) {
		if (y.get(num) !== count) return false;
	}
	return true;
}
