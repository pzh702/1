function middleNode(head) {
	let slow = head,
		fast = head;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}
//1,2,3,4
