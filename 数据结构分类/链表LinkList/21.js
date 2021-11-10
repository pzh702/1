function mergeList(head1, head2) {
	if (!head1) {
		return head2;
	}
	if (!head2) {
		return head1;
	}
	let node = null;
	if (head1.val < head2.val) {
		node = head1;
		node.next = mergeList(head1.next, head2);
	} else {
		node = head2;
		node.next = mergeList(head1, head2.next);
	}
	return node;
}
