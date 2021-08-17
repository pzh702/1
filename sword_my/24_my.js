/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function reverseList(pHead) {
	if (!pHead) {
		return null;
	}
	let preNode = null,
		curNode = pHead;
	while (curNode) {
		let flag = curNode.next;
		curNode.next = preNode;
		preNode = curNode;
		curNode = flag;
		if (!flag) {
			return flag;
		}
	}
}
