/**
 * 问题： 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
 * 思路： 其实就是重新定义排序关系，值越小的应当放在前面（书上有详细的证明，不过我还没看）
 */

function printMinNumber(numbers) {
	numbers.sort((a, b) => {
		return "" + a + b > "" + b + a;
	});
	return numbers.join("");
}
