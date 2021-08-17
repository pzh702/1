//每次选出最小数，放第一位
function selectionSort(arr) {
	let minIndex, flag;
	//内层，最后一个数不用比，所以n-1
	for (let i = 0; i < arr.length - 1; i++) {
		minIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		//一趟走完后，把最小值放开头
		flag = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = flag;
	}
}

let arr = [3, 1, 5, 8, 0, 5, 18, 43, 8, 5, 3, 12, 21, 7, 7];
console.log("前" + arr);
selectionSort(arr);
console.log("后" + arr);
