//1,2,3,4,5,6
function reverse(head) {
	if (!head || !head.next) {
		return head;
	}
	// let next = head.next;
	// next.next = head;
	// head.next = null;

	// return reverse(next);

	let node = reverse(head.next);
	head.next.next = head;
	head.next = null;

	return node;
}

function reverseN(head, n) {
	let back;
	if (n === 1) {
		back = head.next;
		return head;
	}
	let node = reverseN(head.next, n - 1);
	head.next.next = head;
	head.next = back;

	return node;
}

function reverseMN(head, m, n) {}
