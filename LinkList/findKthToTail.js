//快慢指针，快的先走k-1步，然后一起走，到末端时慢指针就是倒数第k个
function findKthToTail(head, k) {
	if (k === 0 || !head) {
		return null;
	}
	let slow = head,
		quick = head;
	for (let i = 0; i < k - 1; i++) {
		if (quick.next) {
			quick = quick.next;
		} else {
			return null;
		}
	}
	while (quick.next) {
		quick = quick.next;
		slow = slow.next;
	}
	return slow;
}
