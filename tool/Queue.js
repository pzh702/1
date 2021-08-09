class Queue {
	constructor() {
		this.items = [];
	}
	enqueue(element) {
		this.items.push(element);
	}
	shift() {
		return this.items.shift();
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

// 初始化一个队列
// var s = new Queue();
// s.enqueue(1);
// s.enqueue(2);
// s.enqueue(3);
// s.enqueue(4);
// console.log(s);
// console.log(s.isEmpty);
// console.log(s.size);

export default Queue;
