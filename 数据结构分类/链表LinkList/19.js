function removeNthFromEnd(head, n) {
	let dummy = new ListNode(0);
	dummy.next = head;
	let slow = dummy,
		fast = dummy,
		k = 0;
	while (fast.next) {
		fast = fast.next;
		k++;
		if (k > n) {
			slow = slow.next;
		}
	}
	slow.next = slow.next.next;

	return dummy.next;
}
//1,2,3,4,5   2
