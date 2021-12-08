// add whatever parameters you deem necessary
function averagePair(nums, target) {
	const getPair = num => (target * 2) - num;
	const pairs = new Set();
	for (const num of nums) {
		if (pairs.has(num)) return true;
		pairs.add(getPair(num));
	}
	return false;
}
