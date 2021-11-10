function reverseList(head) {
	if (!head || !head.next) {
		return head;
	}
	let list = reverseList(head.next);
	let flag = head.next;
	flag.next = head;
	head.next = null;

	return list;
	// if (!head || !head.next) {
	// 	return head;
	// }
	// let pre = null,
	// 	cur = head;
	// while (cur) {
	// 	let next = cur.next;
	// 	cur.next = pre;
	// 	pre = cur;
	// 	cur = next;
	// }
	// return pre;
}
