//对单个字符串进行处理的模板
function muban1(str) {
	str += " ";
	let res = [],
		flag = "";
	for (const char of str) {
		if (char === " ") {
			if (flag !== "") {
				res.push(flag);
				flag = "";
			}
		} else {
			flag += char;
		}
	}
	return res;
}

function muban2(str) {
	str += " ";
	let res = [],
		flag = "";
	for (const char of str) {
		if (char === " ") {
			res.push(flag);
			flag = "";
		} else {
			flag += char;
		}
	}
	return res;
}
