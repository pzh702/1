function deleteDuplication(head) {
	if (!head) {
		return null;
	}
	let pre = new ListNode(0),
		index = head;
	pre.next = head;

	while (index) {
		while (index.next && index.val === index.next.val) {
			index = index.next;
		}
		if (pre.next === index) {
			pre = pre.index;
		} else {
			pre.next = index.next;
		}
		index = index.next;
	}
	return head;
}
