// add whatever parameters you deem necessary
function longestFall(nums) {
	let count = 0;
	let highest = 0;
	for (const [i, num] of nums.entries()) {
		count++;
		if (count > highest) highest = count;
		if (nums[i + 1] >= num) count = 0;
	}
	return highest;
}
