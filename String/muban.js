//对单个字符串进行处理的模板
function muban1(str) {
	//只要字符，去除前后置空格
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
	//前后置空格也要
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

let a = muban2("i am a  student ");
console.log(a);
