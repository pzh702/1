function mergeSort(arr) {
	var len = arr.length;
	if (len < 2) {
		return arr;
	}
	var middle = Math.floor(len / 2);
	var left = arr.slice(0, middle);
	var right = arr.slice(middle);
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	var result = [];

	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	while (left.length) result.push(left.shift());

	while (right.length) result.push(right.shift());

	return result;
}

let arr = [6, 7, 4, 5, 0, 2, 6, 3, 1, 9, 5];
let a = mergeSort(arr);
console.log(a);
