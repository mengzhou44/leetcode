// class NumArray {
// 	constructor(nums) {
// 		this.sums = [0]
// 		let sum = 0
// 		for (let num of nums) {
// 			sum += num
// 			this.sums.push(sum)
// 		}
// 	}

// 	sumRange(i, j) {
// 		return this.sums[j + 1] - this.sums[i]
// 	}

// 	update(index, val) {
// 		let oldVal = this.sums[index + 1] - this.sums[index]
// 		for (let i = index + 1; i < this.sums.length; i++) {
// 			this.sums[i] = this.sums[i] + val - oldVal
// 		}
// 	}
// }

class SegmentTree {
	constructor(val, start, end) {
		this.val = val
		this.start = start
		this.end = end
		this.left = null
		this.right = null
	}
}


class NumArray {
	constructor(nums) {
		this.tree = this.buildTree(0, nums.length - 1, nums)
	}

	buildTree(start, end, nums) {
		if (start > end) return null
		if (start === end) return new SegmentTree(nums[start], start, end)

		let mid = start + Math.floor((end - start) / 2)
		let left = this.buildTree(start, mid, nums)
		let right = this.buildTree(mid + 1, end, nums)

		let val = left.val + right.val
		let tree = new SegmentTree(val, start, end)
		tree.left = left
		tree.right = right
		return tree
	}

	update(i, val) {
		this.updateTree(this.tree, i, val)
	}

	updateTree(node, i, val) {
		if (node.start === node.end) {
			node.val = val
			return
		}

		let mid = node.start + Math.floor((node.end - node.start) / 2)
		if (i <= mid) {
			this.updateTree(node.left, i, val)
		} else {
			this.updateTree(node.right, i, val)
		}

		node.val = node.left.val + node.right.val
	}

	sumRange(i, j) {
		return this.sumRangeTree(this.tree, i, j)
	}

	sumRangeTree(node, start, end) {
		if (node === null) return 0

		if (node.start ===start && node.end === end) return node.val
		let mid = node.start + Math.floor((node.end - node.start) / 2)

		if (end <= mid) return this.sumRangeTree(node.left, start, end)
		if (start > mid + 1) return this.sumRangeTree(node.right, start, end)

		return this.sumRangeTree(node.left, start, mid) + this.sumRangeTree(node.right, mid + 1, end)
	}
}

 
