//每次前后比较，把小的放前面
function bubbleSort(arr) {
	//外层，要比较n-1次
	for (let i = 0; i < arr.length - 1; i++) {
		//内层，每次把最小值比出来，要比n-1-i次
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				//交换
				let flag = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = flag;
			}
		}
	}
}

let arr = [3, 1, 5, 8, 0, 5, 18, 43, 8, 5, 3, 12, 21, 7, 7];
console.log("前" + arr);
bubbleSort(arr);
console.log("后" + arr);
