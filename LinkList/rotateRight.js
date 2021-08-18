function rotateRight(head, k) {
	let node1 = head,
		node2 = head;
	while (n--) {
		if (!node2.next) {
			node2 = head;
		}
		node2 = node2.next;
	}
	if (node1 === node2) {
		return head;
	}
	while (node2.next) {
		node1 = node1.next;
		node2 = node2.next;
	}
	let next = node1.next;
	node1.next = null;
	node2.next = head;

	return next;
}
//1,2,3,4,5   2
//4,5,1,2,3
