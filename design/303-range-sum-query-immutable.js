/**
 * @param {number[]} nums
 */
class NumArray {
	constructor(nums) {
		this.sums = [0]
		let sum = 0
		for (let num of nums) {
			sum += num
			this.sums.push(sum)
		}
	}

	sumRange(i, j) {
		return this.sums[j + 1] - this.sums[i]
	}
}
