function moreThanHalfNum(arr) {
	//hash
	let map = new Map();
	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		let num = map.get(item);
		if (num === undefined) {
			map.set(item, 1);
		} else {
			num += 1;
			map.set(item, num);
		}
		if (num > arr.length / 2) {
			return item;
		}
	}
	return 0;
}

let a = moreThanHalfNum([1]);
console.log(a);
