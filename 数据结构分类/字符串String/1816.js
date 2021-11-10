function truncateSentence(s, k) {
	s += " ";
	let res = [],
		flag = "";
	for (const char of s) {
		if (res.length === k) {
			break;
		}
		if (char === " ") {
			res.push(flag);
			flag = "";
		} else {
			flag += char;
		}
	}

	return res.join(" ");
}

let a = truncateSentence("i am a student", 4);
console.log(a);
