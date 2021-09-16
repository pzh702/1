function isSymmetric(root) {
	return isMirror(root, root);
}

function isMirror(p, q) {
	if (p === null && q === null) {
		return true;
	}
	if (p === null || q === null) {
		return false;
	}
	if (p.val !== q.val) {
		return false;
	}
	return isMirror(p.left, q.right) && isMirror(p.right, q.left);
}
