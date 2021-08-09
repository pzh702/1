class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}
class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}
	append(element) {
		const node = new Node(element);
		let current = null;
		if (this.head == null) {
			this.head = node;
		} else {
			current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.length++;
	}
	insert(position, element) {
		if (position < 0 && position > this.length) {
			return false;
		} else {
			const node = new Node(element);
			let current = this.head;
			let previous = null;
			let index = 0;
			if (position === 0) {
				this.head = node;
				node.next = current;
			} else {
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;
			}
			this.length++;
			return true;
		}
	}

	removeAt(position) {
		if (position < 0 && position > this.length) {
			return false;
		} else {
			let current = this.head;
			let previous = null;
			let index = 0;
			if (position === 0) {
				this.head = current.next;
			} else {
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
			}
			this.length--;
			return true;
		}
	}
	findIndex(element) {
		let current = this.head;
		let index = -1;
		while (current) {
			if (current.element === element) {
				return index + 1;
			}
			index++;
			current = current.next;
		}
		return -1;
	}
	remove(element) {
		const index = this.findIndex(element);
		return this.removeAt(index);
	}
	get size() {
		return this.length;
	}
	get isEmpty() {
		return !this.length;
	}
	toString() {
		let current = this.head;
		let slink = "";
		while (current) {
			slink += `${current.element}-`;
			current = current.next;
		}
		return slink;
	}
}
// 初始化一个链表
// var s = new LinkedList();
// s.append(1);
// s.append(2);
// s.append(3);
// s.append(4);
// console.log(s);
// console.log(s.isEmpty);
// console.log(s.size);

export default LinkedList;
