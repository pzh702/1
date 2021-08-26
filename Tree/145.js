function backTraversal(root) {
	return back(root, []);
}

function back(root, res) {
	if (!root) {
		return res;
	}
	back(root.left);
	back(root.right);
	res.push(root);

	return res;
}
