function sortList(head) {
	//冒泡o(n^2)
	// if (!head) {
	// 	return null;
	// }
	// let i = head;
	// while (i) {
	// 	let j = i.next;
	// 	while (j) {
	// 		if (i.val > j.val) {
	// 			let flag = i.val;
	// 			i.val = j.val;
	// 			j.val = flag;
	// 		}
	// 		j = j.next;
	// 	}
	// 	i = i.next;
	// }
	// return head;

	//归并o(nlogn)
	if (!head || !head.next) {
		return head;
	}
	//找到中点
	let dummy = new ListNode(0);
	dummy.next = head;
	let slow = dummy,
		quick = dummy;
	while (quick && quick.next) {
		quick = quick.next.next;
		slow = slow.next;
	}
	//分成2个链表
	let rightHead = slow.next;
	slow.next = null;
	return mergeList(sortList(head), sortList(rightHead));
}
//1,2,3,4

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
