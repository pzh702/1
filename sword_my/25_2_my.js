function mergeArr(arr1, arr2) {
	//常规做法
	// let res = [];
	// while (arr1.length && arr2.length) {
	// 	if (arr1[0] < arr2[0]) {
	// 		res.push(arr1.shift());
	// 	} else {
	// 		res.push(arr2.shift());
	// 	}
	// }
	// return res.concat(arr1).concat(arr2);
	//递归做法
	let res = [];
	if (!arr1.length) {
		return res.concat(arr2);
	}
	if (!arr2.length) {
		return res.concat(arr1);
	}

	let item = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();
	res = [item].concat(mergeArr(arr1, arr2));
	return res;
}

let a = mergeArr([1, 3, 6, 8], [2, 5, 7, 9, 10]);
console.log(a);
