function hasCycle(head) {
	if (!head) {
		return null;
	}
	let slow = head,
		quick = head;
	while (quick.next.next && slow.next) {
		quick = quick.next.next;
		slow = slow.next;
		if (slow === quick) {
			return true;
		}
	}
	return false;
}
