function backTraversal(root) {
	return back(root, []);
}

function back(root, res) {
	if (!root) {
		return res;
	}
	back(root.left, res);
	back(root.right, res);
	res.push(root.val);

	return res;
}
