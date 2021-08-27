function isPalinDrome(head) {
	//反转后比较或者比较前序后序的输出
	return preorder(head, "") === back(head, "");
}
//1,2,3,2,1     1,2,2,1

function preorder(head, res) {
	if (!head) {
		return;
	}
	res += head.val;
	preorder(head.next, res);

	return res;
}

function back(head, res) {
	if (!head) {
		return;
	}
	back(head.next, res);
	res += head.val;

	return res;
}
