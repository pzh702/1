// string reverseWords(string s)
// {
//     if (s.empty())
//         return 0;
//     s += " ";
//     string temp = "";
//     vector<string> res;
//     for (char ch : s)
//     {
//         if (ch == ' ')
//         {
//             res.push_back(temp);
//             temp.clear();
//         }
//         else
//             temp += ch;
//     }
//     s.clear();
//     for (string &str : res)
//     {
//         reverse(str.begin(), str.end());
//         s += str + ' ';
//     }
//     s.pop_back(); //注意最后多加了一个空格要去掉
//     return s;
// }

function reverseWords(s) {
	s += " ";
	let res = [],
		flag = "";
	for (const char of s) {
		if (char === " ") {
			res.push(flag.split("").reverse().join(""));
			flag = "";
		} else {
			flag += char;
		}
	}
	return res.join(" ");
}

let a = reverseWords("i am a student");
console.log(a);
