//找链表环的结点
function findEntryNodeOfLoop(head) {
	//快慢指针，相遇后快的从头慢走，再次相遇就是入口
	// if (!head) {
	// 	return null;
	// }
	// let slow = head,
	// 	fast = head;
	// while (fast && fast.next) {
	// 	slow = slow.next;
	// 	fast = fast.next.next;
	// 	if (slow === fast) {
	// 		fast = head;
	// 		while (slow !== fast) {
	// 			slow = slow.next;
	// 			fast = fast.next;
	// 		}
	// 		return slow;
	// 	}
	// }
	// return null;

	//哈希
	if (!head) {
		return null;
	}
	let set = new Set();
	while (head) {
		if (set.has(head)) {
			return head;
		}
		set.add(head);
		head = head.next;
	}
	return null;
}
