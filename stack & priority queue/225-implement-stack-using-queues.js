class MyStack {
	constructor() {
		this.queue= new MyQueue()
	}

	push(val) {
        this.queue.enqueue(val)
        for(let i=0; i<this.queue.size()-1; i++) {
            this.queue.enqueue(this.queue.dequeue())
        }
	}

	pop() {
	   return  this.queue.dequeue()
	 
	}

	top() {
	    return this.queue.peek()
	}

	empty() {
		return this.queue.size() === 0
	}
}

class MyQueue {
	constructor() {
		this.array = []
	}

	enqueue(val) {
		this.array.push(val)
	}

	dequeue() {
		return this.array.shift()
	}

	peek() {
		return this.array[0]
	}

	size() {
		return this.array.length
	}

	empty() {
		return this.size() === 0
	}
}
