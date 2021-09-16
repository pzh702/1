function KthSmallest(root, k) {
	let res,
		count = 0;
	const midTraverse = function (root, k) {
		if (!root) {
			return null;
		}
		midTraverse(root.left, k);
		//中序
		count++;
		if (count === k) {
			res = root.val;
			return;
		}
		midTraverse(root.right, k);
	};

	midTraverse(root, k);

	return res;
}
