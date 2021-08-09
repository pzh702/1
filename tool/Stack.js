class Stack {
	constructor() {
		this.items = [];
	}

	push(element) {
		this.items.push(element);
	}
	pop() {
		return this.items.pop();
	}
	get size() {
		return this.items.length;
	}
	get isEmpty() {
		return !this.items.length;
	}
	clear() {
		this.items = [];
	}
	print() {
		console.log(this.items.toString());
	}
}

// 初始化一个栈
// var s = new Stack();
// s.push(1);
// s.push(2);
// s.push(3);
// s.push(4);
// console.log(s);
// console.log(s.isEmpty);
// console.log(s.size);

module.exports = Stack;
