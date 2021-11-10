function reverseN(head, n) {
	let backNode = null;
	if (!head || n <= 1) {
		backNode = head.next;
		return head;
	}
	let node = reverseN(head.next, n - 1);
	head.next.next = head;
	head.next = backNode;

	return node;
}
//1,2,3,4,5,6=>3,2,1,4,5,6

let backNode = b.next;
function reverseAB(head, b) {
	if (!head || head === b) {
		return head;
	}
	let node = reverseAB(head.next, b);
	head.next.next = head;
	head.next = backNode;

	return node;
}
