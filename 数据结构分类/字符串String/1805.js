function numDifferentIntegers(s) {
	s += "a";
	let res = new Set(),
		flag = "";
	for (const char of s) {
		if (/^[A-Z]$/i.test(char)) {
			if (flag !== "") {
				res.add(flag);
				flag = "";
			}
		} else {
			if (flag === "0") {
				flag = "";
			}
			flag += char;
		}
	}
	return res.size;
}

let a = numDifferentIntegers("df543jhg54j43dhj0010hg010jk");
console.log(a);
