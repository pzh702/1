function removeNthFromEnd(head, n) {
	if (!head) {
		return null;
	}
	let pre = new ListNode(0);
	pre.next = head;
	let slow = pre,
		quick = pre;
	for (let i = 0; i < n; i++) {
		quick = quick.next.next;
	}
	while (quick.next) {
		slow = slow.next;
		quick = quick.next;
	}
	slow.next = slow.next.next;
	return pre.next;
}
0, 1, 2, 3, 4, 5;
