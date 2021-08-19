function moreThanHalfNum(arr) {
	//hash
	let map = new Map();
	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		if (map.get(item) === undefined) {
			map.set(item, 1);
		} else {
			let num = map.get(item) + 1;
			map.set(item, num);
			if (num > arr.length / 2) {
				return item;
			}
		}
	}
	return 0;
}

let a = moreThanHalfNum([1, 2, 3, 2, 2, 2, 5, 4, 2]);
console.log(a);
