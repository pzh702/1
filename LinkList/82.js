function deleteDuplication(head) {
	if (!head || !head.next) {
		return head;
	}
	let dummy = new ListNode(0);
	dummy.next = head;
	pre = dummy;
	cur = head;
	while (cur) {
		while (cur.next && cur.val === cur.next.val) {
			cur = cur.next;
		}
		if (pre.next === cur) {
			pre = pre.next;
		} else {
			pre.next = cur.next;
		}
		cur = cur.next;
	}
	return dummy.next;
}
