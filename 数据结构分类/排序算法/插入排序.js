function insertSort(arr) {
	var preIndex, current;
	for (let i = 0; i < arr.length; i++) {
		preIndex = i - 1;
		current = arr[i];
		while (preIndex >= 0 && arr[preIndex] > current) {
			arr[preIndex + 1] = arr[preIndex];
			preIndex--;
		}
		arr[preIndex + 1] = current;
	}
	return arr;
}

let arr = [3, 2, 1];
let a = insertSort(arr);
console.log(a);
