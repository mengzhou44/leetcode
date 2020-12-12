class SegmentTree {
	constructor(val, row1, col1, row2, col2) {
		this.val = val
		this.row1 = row1
		this.col1 = col1
		this.row2 = row2
		this.col2 = col2
		this.nw = null
		this.ne = null
		this.sw = null
		this.se = null
	}
}

class NumMatrix {
	constructor(matrix) {
		this.matrix = matrix
		let m = matrix.length
		let n = matrix[0].length
		this.root = this.buildTree(0, 0, m - 1, n - 1)
	}

	buildTree(row1, col1, row2, col2) {
		if (row1 > row2 || col1 > col2) return null
		if (row1 === row2 && col1 == col2) {
			return new SegmentTree(this.matrix[row1][col1], row1, col1, row2, col2)
		}

		let rowMid = row1 + Math.floor((row2 - row1) / 2)
		let colMid = col1 + Math.floor((col2 - col1) / 2)

		let node = new SegmentTree(0, row1, col1, row2, col2)
		node.nw = this.buildTree(row1, col1, rowMid, colMid)
		node.ne = this.buildTree(row1, colMid + 1, rowMid, col2)
		node.sw = this.buildTree(rowMid + 1, col1, row2, colMid)
		node.se = this.buildTree(rowMid + 1, colMid + 1, row2, col2)
		this.updateNodeVal(node)

		return node
	}

	updateNodeVal(node) {
		let val = 0
		if (node.nw !== null) val += node.nw.val
		if (node.sw !== null) val += node.sw.val
		if (node.ne !== null) val += node.ne.val
		if (node.se !== null) val += node.se.val

		node.val = val
	}

	update(row, col, val) {
		this.updateTree(this.root, row, col, val)
	}

	updateTree(node, row, col, val) {
		if (node.row1 === row && node.col1 === col && node.row2 === row && node.col2 === col) {
			node.val = val
			return
		}

		let rowMid = node.row1 + Math.floor((node.row2 - node.row1) / 2)
		let colMid = node.col1 + Math.floor((node.col2 - node.col1) / 2)

		if (row <= rowMid && col <= colMid) {
			this.updateTree(node.nw, row, col, val)
		} else if (row <= rowMid && col > colMid) {
			this.updateTree(node.ne, row, col, val)
		} else if (row > rowMid && col <= colMid) {
			this.updateTree(node.sw, row, col, val)
		} else if (row > rowMid && col > colMid) {
			this.updateTree(node.se, row, col, val)
		}

		this.updateNodeVal(node)
	}

	sumRegion(row1, col1, row2, col2) {
		return this.sumRegionTree(this.root, row1, col1, row2, col2)
	}

	sumRegionTree(node, row1, col1, row2, col2) {
		if (node === null) {
			console.log('step 0')
			return 0
		}

		if (node.row1 === row1 && node.row2 === row2 && node.col1 === col1 && node.col2 === col2) {
			return node.val
		}

		let rowMid = node.row1 + Math.floor((node.row2 - node.row1) / 2)
		let colMid = node.col1 + Math.floor((node.col2 - node.col1) / 2)

		if (row2 <= rowMid) {
			// top half plane
			if (col2 <= colMid) {
				return this.sumRegionTree(node.nw, row1, col1, row2, col2)
			} else if (col1 > colMid) {
				return this.sumRegionTree(node.ne, row1, col1, row2, col2)
			}
			return (
				this.sumRegionTree(node.nw, row1, col1, row2, colMid) +
				this.sumRegionTree(node.nw, row1, colMid + 1, row2, col2)
			)
		} else if (row1 > rowMid) {
			if (col2 <= colMid) {
				return this.sumRegionTree(node.sw, row1, col1, row2, col2)
			} else if (col1 > colMid) {
				return this.sumRegionTree(node.se, row1, col1, row2, col2)
			}
			return (
				this.sumRegionTree(node.sw, row1, col1, row2, colMid) +
				this.sumRegionTree(node.se, row1, colMid + 1, row2, col2)
			)
		} else {
			if (col2 <= colMid) {
				return (
					this.sumRegionTree(node.nw, row1, col1, rowMid, col2) +
					this.sumRegionTree(node.sw, rowMid + 1, col1, row2, col2)
				)
			} else if (col1 > colMid) {
				return (
					this.sumRegionTree(node.ne, row1, col1, rowMid, col2) +
					this.sumRegionTree(node.se, row1, col1, rowMid + 1, col2)
				)
			} else {
				return (
					this.sumRegionTree(node.nw, row1, col1, rowMid, colMid) +
					this.sumRegionTree(node.ne, row1, colMid + 1, rowMid, col2) +
					this.sumRegionTree(node.sw, rowMid + 1, col1, row2, colMid) +
					this.sumRegionTree(node.se, rowMid + 1, colMid + 1, row2, col2)
				)
			}
		}
	}
}

let matrix = [
	[3, 0, 1, 4, 2],
	[5, 6, 3, 2, 1],
	[1, 2, 0, 1, 5],
	[4, 1, 0, 1, 7],
	[1, 0, 3, 0, 5],
]

let numMatrix = new NumMatrix(matrix)
console.log(numMatrix.sumRegion(2, 1, 4, 3))
numMatrix.update(3, 2, 2)
console.log(numMatrix.sumRegion(2, 1, 4, 3))
