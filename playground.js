function mergeArr(arr1, arr2) {
	//合并有序数组
	let res = [];
	while (arr1.length && arr2.length) {
		if (arr1[0] < arr2[0]) {
			res.push(arr1.shift());
		} else {
			res.push(arr2.shift());
		}
	}
	return res.concat(arr1).concat(arr2);
}

function mergeSort(arr) {
	//归并排序
	if (arr.length <= 1) {
		return arr;
	}
	let mid = arr.length >> 1;
	let left = arr.slice(0, mid);
	let right = arr;
	return mergeArr(mergeSort(left), mergeSort(right));
}
