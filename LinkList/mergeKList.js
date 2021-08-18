function mergeKList(list) {
	if (list.length < 2) {
		return list[0][0];
	}
	let mid = list.length >> 1;
	let left = list.slice(0, mid);
	let right = list.slice(mid);
	return mergeList(mergeKList(left), mergeKList(right));
}

function mergeList(head1, head2) {
	if (!head1) {
		return head2;
	}
	if (!head2) {
		return head1;
	}
	let pre = new ListNode(0),
		node = pre;
	while (head1 && head2) {
		if (head1.val <= head2.val) {
			node.next = head1;
			node = head1;
			head1 = head1.next;
		} else {
			node.next = head2;
			node = head2;
			head2 = head2.next;
		}
	}
	if (head1) {
		node.next = head1;
	} else if (head2) {
		node.next = head2;
	}
	return pre.next;
}
1, 2, 3, 4;
0, 3, 4;
