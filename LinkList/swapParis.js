function swapParis(head) {
	if (!head || !head.next) {
		return head;
	}
	let cur = head,
		pre = new ListNode(0);
	pre.next = head;
	while (cur.next) {
		let next = cur.next,
			next1 = cur.next.next;
		pre.next = next;
		next.next = cur;
		cur.next = next1;

		pre = cur;
		cur = next1;
	}
	return head;
}
