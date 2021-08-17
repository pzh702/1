/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let start = 0;
	let end = nums.length - 1;
	while (start <= end) {
		let mid = start + Math.floor((end - start) / 2);
		if (nums[mid] < target) {
			start = mid + 1;
		} else if (nums[mid] > target) {
			end = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
};

let nums = [-1, 0, 3, 3, 5, 9, 12],
	target = 3;

console.log(search(nums, target));
