function flatten(root) {
	if (!root) {
		return null;
	}
	let node1 = flatten(root.left);
	let node2 = flatten(root.right);

	root.left = null;
	root.right = node1;
	while (node1.right) {
		node1 = node1.right;
	}
	node1.right = node2;

	return root;
}
