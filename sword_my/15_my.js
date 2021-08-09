function numberOf1(n) {
	let count = 0;
	while (n) {
		count++;
		n = n & (n - 1); //关键：可以移除二进制中的一位1
	}
	return count;
}
