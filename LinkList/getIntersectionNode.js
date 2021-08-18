function getIntersectionNode(head1, head2) {
	// if (!head1 || !head2) {
	//   return null
	// }
	// let node1 = head1,node2 = head2,count=0
	// while (count<=2) {
	//   node1 = node1.next
	//   node2 = node2.next
	//   if (!node1.next) {
	//     count++
	//     node1=head2
	//   }
	//   if (!node2.next) {
	//     count++
	//     node2 = head1
	//   }
	//   if (node1===node2) {
	//     return node1
	//   }
	// }
	// return null
	//不相交的情况，2者最后都会等于null
	let node1 = head1,
		node2 = head2;
	while (node1 !== node2) {
		node1 = node1 !== null ? node1.next : head2;
		node2 = node2 !== null ? node2.next : head1;
	}
	return node1;
}
1, 2, 3, 4, 5;
7, 8, 4, 5;
