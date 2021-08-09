/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let map = new Map();
	map.set(nums[0], 0);
	for (let i = 1; i < nums.length; i++) {
		let other = target - nums[i];
		if (map.get(other) != undefined) {
			return [map.get(other), i];
		} else {
			map.set(nums[i], i);
		}
	}
	return [];
};

let a = twoSum([-3, 2, 8, 5, 4], 9);
console.log(a);
