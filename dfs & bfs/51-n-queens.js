/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
	let solutions = []

	dfs(0, [])
	return solutions

	function dfs(row, queens = []) {
		if (queens.length === n) {
			solutions.push(printQueens(queens, n))
		}

		if (row === n) return

		for (let col = 0; col < n; col++) {
			if (!isInAttack(row, col, queens)) {
				queens.push([row, col])
				dfs(row + 1, queens)
				queens.pop()
			}
		}
	}
}

function printQueens(queens, n) {
	let result = []
	for (let [r, c] of queens) {
		let temp = ''
		for (let col = 0; col < n; col++) {
			if (col !== c) {
				temp += '.'
			} else {
				temp += 'Q'
			}
		}
		result.push(temp)
	}
	return result
}

function isInAttack(row, col, queens) {
	for (let [r, c] of queens) {
		if (row === r || col === c || Math.abs(row - r) === Math.abs(col - c)) {
			return true
		}
	}

	return false
}
