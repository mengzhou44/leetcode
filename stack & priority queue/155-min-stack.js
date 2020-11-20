class MinStack {
	constructor() {
		this.array = []
		this.min = []
	}

	push(num) {
		this.array.push(num)
		if (this.min.length === 0) {
			this.min.push(num)
		} else {
			if (this.min[this.min.length - 1] >= num) {
				this.min.push(num)
			}
		}
	}

	pop() {
		if (this.array.length === 0) return

		let val = this.array.pop()

		if (this.min[this.min.length - 1] === val) {
			this.min.pop()
		}
		return val
	}

	top() {
		return this.array[this.array.length - 1]
	}

	getMin() {
		return this.min[this.min.length - 1]
	}
}
