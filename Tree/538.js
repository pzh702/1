function convertBST(root) {
	let sum = 0;
	const midTraverse = function (root) {
		if (!root) {
			return;
		}
		midTraverse(root.right);
		sum += root.val;
		root.val = sum;
		midTraverse(root.left);
	};

	midTraverse(root);

	return root;
}
