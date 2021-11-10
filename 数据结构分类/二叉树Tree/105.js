function buildTree(preOrder, inOrder) {
	//前：3,5,6,2,1 中:6,5,2,3,1
	return build(
		preOrder,
		0,
		preOrder.length - 1,
		inOrder,
		0,
		inOrder.length - 1
	);
}

function build(preOrder, preStart, preEnd, inOrder, inStart, inEnd) {
	if (preStart > preEnd) {
		return null;
	}
	let root = new TreeNode(preOrder[preStart]);
	let index;
	for (let i = 0; i < inOrder.length; i++) {
		if (inOrder[i] === preOrder[preStart]) {
			index = i;
			break;
		}
	}
	let leftLength = index - inStart;
	root.left = build(
		preOrder,
		preStart + 1,
		preStart + leftLength,
		inOrder,
		inStart,
		index - 1
	);
	root.right = build(
		preOrder,
		preStart + leftLength + 1,
		preEnd,
		inOrder,
		index + 1,
		inEnd
	);

	return root;
}
