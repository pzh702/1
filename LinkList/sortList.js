function sortList(head) {
	//o(n^2)
	// let head_i = head
	// while (head_i.next) {
	//   let head_j=head_i.next
	//   while (head_j) {
	//     if (head_i.val>head_j.val) {
	//       let flag = head_i.val
	//       head_i.val = head_j.val
	//       head_j.val = flag
	//     }
	//   }
	// }
	// return head

	//o(nlogn)
	if (!head.next) {
		return head;
	}
	//找到中点
	let slow = head,
		quick = head;
	while (quick.next.next && slow.next) {
		quick = quick.next.next;
		slow = slow.next;
	}
	//分成2个链表
	let rightHead = slow.next;
	slow.next = null;
	return mergeList(sortList(head), sortList(rightHead));
}

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
