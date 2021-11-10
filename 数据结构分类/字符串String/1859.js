//"am2 a3 i1 student4"=>"i am a student"
function sortSentence(s) {
	s += " ";
	let res = [],
		flag = "";
	for (const char of s) {
		if (char === " ") {
			res.push(flag);
			flag = "";
		} else {
			flag += char;
		}
	}
	res.sort(
		(a, b) =>
			parseInt(a.charAt(a.length - 1)) - parseInt(b.charAt(b.length - 1))
	);

	return res.map((item) => item.slice(0, item.length - 1)).join(" ");
}

let a = sortSentence("am2 a3 i1 student4");
console.log(a);
