function preorderTraversal(root) {
	return preorder(root, []);
}

function preorder(root, res) {
	if (!root) {
		return res;
	}
	res.push(root);
	preorder(root.left);
	preorder(root.right);

	return res;
}
