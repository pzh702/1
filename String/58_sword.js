function reverseWord(s) {
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
	// if (res.length===0) {
	//   return ""
	// }
	return res.reverse().join(" ");
}

let a = reverseWord(" i am  a student ");
console.log(a);
