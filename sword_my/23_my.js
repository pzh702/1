/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function findEntryNodeOfLoop(pHead) {
	if (!pHead) {
		return null;
	}
	let slow = pHead,
		quick = pHead;
	while (quick.next.next) {
		slow = slow.next;
		quick = quick.next.next;
		if (slow === quick) {
			return true;
		}
	}
	return false;
}
