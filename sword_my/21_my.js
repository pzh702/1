function reOrderArray(array) {
	//奇数左，偶数右
	let leftArr = [],
		rightArr = [];
	for (let i = 0; i < array.length; i++) {
		const item = array[i];
		if (item % 2 === 1) {
			leftArr.push(item);
		} else {
			rightArr.push(item);
		}
	}
	console.log(leftArr);
	console.log(rightArr);
	return leftArr.concat(rightArr);
}

let a = reOrderArray([1, 2, 3, 4, 5, 6]);
console.log(a);
