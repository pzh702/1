function buildTree(preOrder, postOrder) {
	//前：1,2,4,3 后：4,2,3,1
	//前序的第二个数是后序左边最后的数
	if (preOrder.length === 0) {
		return null;
	}
	let root = new TreeNode(preOrder[0]);
	let index;
	for (let i = 0; i < postOrder.length; i++) {
		if (postOrder[i] === preOrder[1]) {
			index = i;
			break;
		}
	}
	let leftLength = index + 1;
	root.left = buildTree(
		preOrder.slice(1, 1 + leftLength),
		postOrder.slice(0, leftLength)
	);
	root.right = buildTree(
		preOrder.slice(leftLength + 1),
		postOrder.slice(leftLength, postOrder.length - 1)
	);

	return root;
}
