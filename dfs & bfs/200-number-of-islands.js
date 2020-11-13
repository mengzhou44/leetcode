function numIslands(grid) {
	let m = grid.length
	let n = grid[0].length
	let count = 0

	for (let row = 0; row < m; row++) {
		for (let col = 0; col < n; col++) {
			if (dfs(row, col)) {
				count++
			}
		}
	}

	return count

	function dfs(row, col) {
		if (row < 0 || row > m - 1) return false
		if (col < 0 || col > n - 1) return false
		if (grid[row][col] === '0') return false

		grid[row][col] = '0'

		dfs(row - 1, col)
		dfs(row + 1, col)
		dfs(row, col - 1)
		dfs(row, col + 1)

		return true
	}
}
