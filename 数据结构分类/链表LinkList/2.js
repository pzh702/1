function addTwoNumbers(head1, head2) {
	let head = null,
		tail = null;
	count = 0;
	while (head1 || head2) {
		let num1 = head1 ? head1.val : 0;
		let num2 = head2 ? head2.val : 0;
		let num = num1 + num2 + count;
		if (num >= 10) {
			num = num % 10;
			count = 1;
		} else {
			count = 0;
		}
		if (!head) {
			head = tail = new ListNode(num);
		} else {
			tail.next = new ListNode(num);
			tail = tail.next;
		}
		if (head1) {
			head1 = head1.next;
		}
		if (head2) {
			head2 = head2.next;
		}
	}
	if (count > 0) {
		tail.next = new ListNode(count);
	}

	return head;
}
// [2,4,3],[5,6] => [7,0,8]
// 342+65=407
