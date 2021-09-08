function buildTree(postOrder, inOrder) {
	if (postOrder.length === 0) {
		return null;
	}
	let rootVal = postOrder[postOrder.length - 1];
	let root = new TreeNode(rootVal);
	let index;
	for (let i = 0; i < inOrder.length; i++) {
		if (inOrder[i] === rootVal) {
			index = i;
			break;
		}
	}
	root.left = buildTree(postOrder.slice(0, index), inOrder.slice(0, index));
	root.right = buildTree(
		postOrder.slice(index, postOrder.length - 1),
		inOrder.slice(index + 1)
	);

	return root;
}
