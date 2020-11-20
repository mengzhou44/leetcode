/**
 * @param {number} n
 * @return {number}
 */
function totalNQueens(n) {
	let total = 0

	dfs(0, [])

	return total

	function dfs(row, queens = []) {
		if (queens.length === n) {
			total++
			return
		}

		for (let col = 0; col < n; col++) {
			if (!isInAttack(row, col, queens)) {
				queens.push([row, col])
				dfs(row + 1, queens)
				queens.pop()
			}
		}
	}

	function isInAttack(row, col, queens) {
		for (let [r, c] of queens) {
			if (row === r || col === c || Math.abs(row - r) === Math.abs(col - c)) {
				return true
			}
		}

		return false
	}
}
