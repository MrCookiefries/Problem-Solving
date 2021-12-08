// add whatever parameters you deem necessary
function pivotIndex(nums) {
	let left = 0;
	let right = nums.reduce((sum, num) => sum + num);
	for (const [i, num] of nums.entries()) {
		if (i) left += nums[i - 1];
		right -= num;
		if (left === right) return i;
	}
	return -1;
}
