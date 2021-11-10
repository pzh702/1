function constructMaximumBinaryTree(arr) {
	if (arr.length === 0) {
		return null;
	}
	let flag = arr[0],
		a = 0;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > flag) {
			flag = arr[i];
			a = i;
		}
	}
	let root = new TreeNode(flag);
	root.left = constructMaximumBinaryTree(arr.slice(0, a));
	root.right = constructMaximumBinaryTree(arr.slice(a + 1));

	return root;
}
