/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
//快慢指针，快的先走k-1步，然后一起走，到末端时慢指针就是倒数第k个
function findKthToTail(head, k) {
	if (k === 0 || !head) {
		return null;
	}
	let slow = head,
		quick = head;
	flag = 0;
	while (quick.next) {
		quick = quick.next;
		flag++;
		if (flag >= k) {
			slow = slow.next;
		}
	}
	return slow;
}
