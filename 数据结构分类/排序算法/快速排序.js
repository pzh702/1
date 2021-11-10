var quickSort = function (arr, left, right) {
	if (left >= right) {
		return arr;
	}

	var i = left,
		j = right;
	base = arr[left];

	while (i < j) {
		// 从右边起，寻找比基数小的数
		while (i < j && arr[j] >= base) {
			j--;
		}

		// 从左边起，寻找比基数大的数
		while (i < j && arr[i] <= base) {
			i++;
		}

		if (i < j) {
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}

	arr[left] = arr[i];
	arr[i] = base;

	quickSort(arr, left, i - 1);
	quickSort(arr, i + 1, right);

	return arr;
};

let arr = [6, 7, 4, 5, 0, 2, 6, 3, 1, 9, 5];
let a = quickSort(arr, 0, arr.length - 1);
console.log(a);
