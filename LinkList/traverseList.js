function traverseList(head) {
	//遍历输出链表的值
	if (!head) {
		return;
	}
	//前序
	console.log(head.val);
	traverseList(head.next);

	//后序
	traverseList(head.next);
	console.log(head.val);
}
