function hasCycle(head) {
	if (!head || !head.next) {
		return false;
	}
	let slow = head,
		quick = head.next;
	while (slow !== quick) {
		if (!quick || !quick.next) {
			return false;
		}
		quick = quick.next.next;
		slow = slow.next;
	}
	return true;
}
