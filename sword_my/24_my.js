/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function reverseList(pHead) {
	// let preNode = null,
	// 	curNode = pHead;
	// while (curNode) {
	// 	let flag = curNode.next;
	// 	curNode.next = preNode;
	// 	preNode = curNode;
	// 	curNode = flag;
	// }
	// return preNode;
	//递归
	if (!pHead || !pHead.next) {
		return pHead;
	}
	let node = reverseList(pHead.next);
	pHead.next.next = pHead;
	pHead.next = null;

	return node;
}
