// add whatever parameters you deem necessary
function countPairs(nums, sum) {
	const pairs = new Set();
	let count = 0;
	for (const num of nums) {
		if (pairs.has(num)) {
			count++;
		}
		pairs.add(sum - num);
	}
	return count;
}
