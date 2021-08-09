const Stack = require("../tool/Stack");

/**
 *
 * @param {String} s
 * @param {String} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
	let stack_s = new Stack();
	let stack_t = new Stack();
	for (const ch of s) {
		if (ch === "#") {
			stack_s.pop();
			continue;
		} else {
			stack_s.push(ch);
		}
	}
	for (const ch of t) {
		if (ch === "#") {
			stack_t.pop();
			continue;
		} else {
			stack_t.push(ch);
		}
	}
	if (stack_s.items.toString() === stack_t.items.toString()) {
		console.log(true);
		return true;
	} else {
		console.log(false);
		return false;
	}
};

backspaceCompare("ab#c", "aa#bb##c#");
