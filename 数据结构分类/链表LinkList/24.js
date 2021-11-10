function swapParis(head) {
	// if (!head || !head.next) {
	// 	return head;
	// }
	// let cur = head,
	// 	dummy = new ListNode(0);
	// dummy.next = head;
	// let pre = dummy;
	// while (cur && cur.next) {
	// 	let next = cur.next,
	// 		next1 = cur.next.next;
	// 	pre.next = next;
	// 	next.next = cur;
	// 	cur.next = next1;

	// 	pre = cur;
	// 	cur = next1;
	// }
	// return dummy.next;

	//递归
	if (!head || !head.next) {
		return head;
	}
	let next = head.next;
	head.next = swapPairs(next.next);
	next.next = head;

	return next;
}
