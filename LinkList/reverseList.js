function reverseList(head) {
	// if (head === null || head.next === null) {
	// 	return head;
	// }
	// let list = reverseList(head.next);
	// let flag = head.next;
	// flag.next = head;
	// head.next = null;

	// return list;
	if (!pHead) {
		return null;
	}
	let preNode = null,
		curNode = pHead;
	while (curNode) {
		let flag = curNode.next;
		curNode.next = preNode;
		preNode = curNode;
		curNode = flag;
		if (!flag) {
			return flag;
		}
	}
}
