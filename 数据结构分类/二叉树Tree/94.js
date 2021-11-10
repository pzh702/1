function midTraversal(root) {
	return mid(root, []);
}

function mid(root, res) {
	if (!root) {
		return res;
	}
	mid(root.left, res);
	res.push(root.val);
	mid(root.right, res);

	return res;
}
