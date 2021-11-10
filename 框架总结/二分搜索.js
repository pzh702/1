//不要出现 else，而是把所有情况用 else if 写清楚，这样可以清楚地展现所有细节
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var binarySearch = function (nums, target) {
	let start = 0;
	let end = nums.length - 1;
	while (start <= end) {
		let mid = start + Math.floor((end - start) / 2);
		if (nums[mid] < target) {
			start = mid + 1;
		} else if (nums[mid] > target) {
			end = mid - 1;
		} else if (nums[mid] === target) {
			return mid;
		}
	}
	return -1;
};

//左侧边界二分查找
var left_bound = function (nums, target) {
	let start = 0;
	let end = nums.length - 1;
	while (start <= end) {
		let mid = start + Math.floor((end - start) / 2);
		if (nums[mid] < target) {
			start = mid + 1;
		} else if (nums[mid] > target) {
			end = mid - 1;
		} else if (nums[mid] === target) {
			//别返回，锁定在左侧边界
			end = mid - 1;
		}
	}
	//最后要检查start越界的情况
	if (start >= nums.length || nums[start] !== target) {
		return -1;
	}
	return start;
};

//右侧边界二分查找
var right_bound = function (nums, target) {
	let start = 0;
	let end = nums.length - 1;
	while (start <= end) {
		let mid = start + Math.floor((end - start) / 2);
		if (nums[mid] < target) {
			start = mid + 1;
		} else if (nums[mid] > target) {
			end = mid - 1;
		} else if (nums[mid] === target) {
			//别返回，锁定在左侧边界
			start = mid + 1;
		}
	}
	//最后要检查start越界的情况
	if (end < 0 || nums[end] !== target) {
		return -1;
	}
	return end;
};
