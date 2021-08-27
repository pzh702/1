function splitListToParts(head, k) {
	//先获取长度
	let n = 0,
		a = head;
	while (a) {
		n++;
		a = a.next;
	}
	let res = [],
		n1 = n / k,
		n2 = n % k,
		a = head;
	if (n1 <= 1) {
		n1 = 1;
		n2 = 0;
	}
	while (res.length < k) {
		let flag = [],
			c = n1 + n2;
		while (c--) {
			flag.push(a.val);
			a = a.next;
		}
		n2 = 0;
		res.push(flag);
	}

	return res;
}
//1,2,3,4,5 2 =>[[1,2,3],[4,5]]
