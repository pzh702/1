// string reorderSpaces(string s)
// {
//     s += " ";
//     string temp = "";
//     vector<string> res;
//     int cnt = -1;
//     for (char ch : s)
//     {
//         if (ch == ' ')
//         {
//             cnt++;
//             if (!temp.empty())
//             {
//                 res.push_back(temp);
//                 temp.clear();
//             }
//         }
//         else
//             temp += ch;
//     }
//     int n = res.size();
//     s.clear();
//     if (n == 1)  //注意一个单词要单独考虑，直接把所有空格放到单词后面
//     {
//         s += res[0];
//         s.insert(s.size(), cnt, ' ');
//         return s;
//     }
//     //前面不考虑一个单词的话，这里分母上就会出现0，blank为平均分配的空格个数，remain为剩下空格个数
//     int blank = cnt / (n - 1), remain = cnt - blank * (n - 1);
//     for (int i = 0; i < res.size() - 1; i++) //重新连接字符串并加上空格
//     {
//         s += res[i];
//         s.insert(s.size(), blank, ' ');
//     }
//     s += res.back();  //连接最后一个字符串
//     if (remain > 0)  //如果有剩余的空格就全放到字符串末尾
//         s.insert(s.size(), remain, ' ');
//     return s;
// }

//"i  am a  student "
function reorderSpaces(s) {
	let count = 0;
	for (const char of s) {
		if (char === " ") {
			count++;
		}
	}
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
	let a = parseInt(count / (res.length - 1)),
		b = count % (res.length - 1);
	let a1 = "",
		b1 = "";
	while (a--) {
		a1 += " ";
	}
	while (b--) {
		b1 += " ";
	}
	let s1 = res.join(a1) + b1;
	return s1;
}

let a = reorderSpaces(" i am  jack  ");
console.log(a);
