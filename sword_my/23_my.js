/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
//找链表环的结点
function findEntryNodeOfLoop(pHead) {
	if (!pHead) {
		return null;
	}
	let slow = pHead,
		quick = pHead;
	count = 1;
	while (quick.next.next) {
		slow = slow.next;
		quick = quick.next.next;
		if (slow === quick) {
			slow = pHead;
			count++;
		}
		if (count === 2) {
			return slow;
		}
	}
	return null;
}
