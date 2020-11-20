/**
 * Initialize your data structure here.
 */

class MyQueue {
	constructor() {
		this.pushStack = new MyStack()
		this.popStack = new MyStack()
	}

	push(num) {
		this.pushStack.push(num)
	}

	pop() {
		if (this.popStack.empty()) {
			while (!this.pushStack.empty()) {
				this.popStack.push(this.pushStack.pop())
			}
		}

		return this.popStack.pop()
	}

	peek() {
		if (this.popStack.empty()) {
			while (!this.pushStack.empty()) {
				this.popStack.push(this.pushStack.pop())
			}
		}

		return this.popStack.top()
	}

	empty() {
		return this.popStack.empty() && this.pushStack.empty()
	}
}

class MyStack {
	constructor() {
		this.array = []
	}

	push(val) {
		this.array.push(val)
	}

	pop() {
		return this.array.pop()
	}

	top() {
		return this.array[this.array.length - 1]
	}

	empty() {
		return this.array.length === 0
	}
}
