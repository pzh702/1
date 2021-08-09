function minRotateArr(arr) {
	//旋转数组最小
	let low = 0,
		high = arr.length - 1;
	// while (low < high) {
	// 	const mid = (low + high) >> 1;
	// 	if (arr[mid] > arr[low] && arr[mid] < arr[high]) {
	// 		return arr[low];
	// 	}
	// 	if (arr[mid] > arr[low]) {
	// 		low = mid;
	// 	} else if (arr[mid] < arr[high]) {
	// 		high = mid;
	// 	} else {
	// 		break;
	// 	}
	// }
	// return arr[high];
	while (low < high) {
		const mid = (low + high) >> 1;
		if (arr[mid] > arr[high]) {
			low = mid + 1;
		} else {
			high = mid;
		}
	}
	return arr[low];
}

console.log(minRotateArr([4, 5, 6, 7, 8, 9, 0, 1, 2, 3]));
