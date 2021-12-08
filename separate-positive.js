// add whatever parameters you deem necessary
function separatePositive(nums) {
	let positive = 0;
	let negative = nums.length - 1;
	const getMiddle = () => Math.floor((positive + negative) / 2);
	const swapNums = (x, y) => [nums[x], nums[y]] = [nums[y], nums[x]];
	while (positive < negative) {
		const middle = getMiddle();
		if (nums[middle] > 0) {
			swapNums(middle, positive);
			positive++;
		} else {
			swapNums(middle, negative);
			negative--;
		}
	}
	return nums;
}
