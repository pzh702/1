//1,2,3,4,5 ->1,4,3,2,5
function reverseBetween(head, left, right) {
	//找到left的前结点和right的后结点
	let pre = head,
		next = right.next;
	while (pre.next !== left) {
		pre = pre.next;
	}
	//切断子链表
	(pre.next = null), (right.next = null);
	//翻转子链表
	reverseList(left);
	//重新拼接子链表
	pre.next = right;
	left.next = next;
}

function reverseList(head) {
	if (!head) {
		return null;
	}
	let pre = null,
		cur = head;
	while (cur) {
		let next = cur.next;
		cur.next = pre;
		pre = cur;
		cur = next;
	}
	return pre;
}
