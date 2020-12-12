class PeekingIterator {
	constructor(iterator) {
		this.iterator = iterator
		this.nextValue = this.fetchNextValue()
	}

	fetchNextValue() {
		if (this.iterator.hasNext()) {
			return this.iterator.next()
		} else {
			return null
		}
	}

	next() {
		let temp = this.nextValue
		this.nextValue = this.fetchNextValue()
		return temp
	}

	peek() {
		return this.nextValue
	}

	hasNext() {
		return this.nextValue !== null
	}
}
