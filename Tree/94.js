function midTraversal(root) {
	return mid(root, []);
}

function mid(root, res) {
	if (!root) {
		return res;
	}
	mid(root.left);
	res.push(root);
	mid(root.right);

	return res;
}
