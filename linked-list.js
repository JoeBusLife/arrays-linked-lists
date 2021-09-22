/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
		let newNode = new Node(val)
		if (this.tail) {
			this.tail.next = newNode;
			this.tail = newNode;
		} else {
			this.head = this.tail = newNode;
		}
		this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
		let newNode = new Node(val)
		if (this.head) {
			newNode.next = this.head;
			this.head = newNode;
		} else {
			this.head = this.tail = newNode;
		}
		this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
		let curNode = this.head;
		if (this.length === 0) throw new Error("Invalid index.");
		else if (this.length === 1) {
			this.head = this.tail = null;
			this.length = 0;
			return curNode.val;
		} else {
			for (let i=1; i<this.length - 1; i++){
				curNode = curNode.next
			}
			let popVal = curNode.next.val;
			this.tail = curNode;
			this.length -= 1;
			return popVal;
		}
  }

  /** shift(): return & remove first item. */

  shift() {
		let curNode = this.head;
		if (this.length === 0) throw new Error("Invalid index.");
		else if (this.length === 1) {
			this.head = this.tail = null;
			this.length = 0;
			return curNode.val;
		} else {
			this.head = curNode.next;
			this.length -= 1;
			return curNode.val;
		}
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
		let curNode = this.head;
		if (idx < this.length && idx >= 0) {
			for (let i=0; i<idx; i++) {
				curNode = curNode.next;
			}
			return curNode.val;
		}
		else throw new Error ("Invalid index.")
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
		let curNode = this.head;
		if (idx < this.length && idx >= 0) {
			for (let i=0; i<idx; i++) {
				curNode = curNode.next;
			}
			curNode.val = val;
		}
		else throw new Error ("Invalid index.")
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
		let curNode = this.head;
		if (idx <= this.length && idx >= 0) {
			if (idx === 0) return this.unshift(val);
			else if (idx === this.length) return this.push(val);
			else {
				for (let i=1; i<idx; i++) {
					curNode = curNode.next;
				}
				let newNode = new Node(val)
				newNode.next = curNode.next;
				curNode.next = newNode;
				this.length += 1;
			}
		}
		else throw new Error ("Invalid index.")
  }


  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
		let curNode = this.head;
		if (idx < this.length && idx >= 0) {
			if (idx === 0) return this.shift();
			else if (idx === this.length - 1) return this.pop();
			else {
				for (let i=1; i<idx; i++) {
					curNode = curNode.next;
				}
				let removeVal = curNode.next.val;
				curNode.next = curNode.next.next
				this.length -= 1;
				return removeVal;
			}
		}
		else throw new Error ("Invalid index.")
  }

  /** average(): return an average of all values in the list */

  average() {
		if (this.length === 0) return 0;
		
		let curNode = this.head;
		let total = curNode.val;
		for (let i=1; i<this.length; i++) {
			curNode = curNode.next;
			total += curNode.val;
		}
		return total / this.length;
  }
}

module.exports = LinkedList;
