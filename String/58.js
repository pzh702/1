function lengthOfLastWord(s) {
	// if (s.length === 0) {
	// 	return 0;
	// }
	s += " ";
	let res = [],
		flag = "";
	for (const char of s) {
		if (char === " ") {
			if (flag !== "") {
				res.push(flag);
				flag = "";
			}
		} else {
			flag += char;
		}
	}
	if (res.length === 0) {
		return 0;
	}
	return res.pop().length;
}

let a = lengthOfLastWord(" adf ");
console.log(a);
