class NumMatrix {
	constructor(matrix) {
		if (matrix.length === 0 || matrix[0].length === 0) {
			this.sums = null
			return
		}
		let m = matrix.length
		let n = matrix[0].length
		this.sums = new Array(m)
		for (let i = 0; i < m; i++) {
			this.sums[i] = new Array(n + 1).fill(0)
		}

		for (let row = 0; row < m; row++) {
			let sum = 0
			for (let col = 0; col < n; col++) {
				sum += matrix[row][col]
				this.sums[row][col + 1] = sum
			}
		}
	}

	sumRegion(row1, col1, row2, col2) {
		if (this.sums === null) return 0
		let sum = 0
		for (let row = row1; row <= row2; row++) {
			sum += this.sums[row][col2 + 1] - this.sums[row][col1]
		}
		return sum
	}
}
