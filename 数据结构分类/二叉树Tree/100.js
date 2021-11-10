function isSameTree(p, q) {
	//顺序不能乱
	if (p === null && q === null) {
		return true;
	}
	if (p === null || q === null) {
		return false;
	}
	if (p.val !== q.val) {
		return false;
	}
	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
