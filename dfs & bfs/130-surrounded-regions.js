/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
	if (board === null || board.length === 0) return
	let m = board.length
	let n = board[0].length
	let visited = new Array(m)
	for (let row = 0; row < m; row++) {
		visited[row] = new Array(n).fill(false)
	}

	let marked = []

	for (let row = 0; row < m; row++) {
		for (let col = 0; col < n; col++) {
			if (row === 0 || col === 0 || row === m - 1 || col === n - 1) {
				if (board[row][col] === 'O') {
					dfs(row, col)
				}
			}
		}
	}

	for (let row = 0; row < m; row++) {
		for (let col = 0; col < n; col++) {
			if (board[row][col] === 'O') {
				let found = marked.find((item) => item.row === row && item.col === col)

				if (found === undefined) {
					board[row][col] = 'X'
				}
			}
		}
	}

	function dfs(row, col) {
		let found = marked.find((item) => item.row === row && item.col === col)
		if (found !== undefined) return

		if (row < 0 || row > m - 1 || col < 0 || col > n - 1) return
		if (visited[row][col] === true) return
		visited[row][col] = true
		if (board[row][col] === 'X') return
		marked.push({ row, col })
		dfs(row + 1, col)
		dfs(row - 1, col)
		dfs(row, col + 1)
		dfs(row, col - 1)
	}
}
