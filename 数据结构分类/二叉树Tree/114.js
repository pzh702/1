function flatten(root) {
	if (!root) {
		return;
	}
	flatten(root.left);
	flatten(root.right);
	let node1 = root.left;
	let node2 = root.right;
	root.left = null;
	root.right = node1;
	while (root.right) {
		root = root.right;
	}
	root.right = node2;
}
