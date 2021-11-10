function inverTree(root) {
	//前序
	// if (!root) {
	//   return null
	// }
	// let flag = root.left
	// root.left=root.right
	// root.right=flag

	// inverTree(root.left)
	// inverTree(root.right)

	// return root

	//后序
	if (!root) {
		return null;
	}
	inverTree(root.left);
	inverTree(root.right);

	let flag = root.left;
	root.left = root.right;
	root.right = flag;

	return root;
}
