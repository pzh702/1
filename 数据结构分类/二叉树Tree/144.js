function preorderTraversal(root) {
	return preorder(root, []);
}

function preorder(root, res) {
	if (!root) {
		return res;
	}
	res.push(root.val);
	preorder(root.left, res);
	preorder(root.right, res);

	return res;
}
