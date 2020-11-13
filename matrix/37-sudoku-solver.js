/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
	let rows = new Map()
	let cols = new Map()
	let boxes = new Map()

	for (let i = 0; i < 9; i++) {
		rows.set(i, new Set())
		cols.set(i, new Set())
		boxes.set(i, new Set())
	}

	for (let row = 0; row < board.length; row++) {
		for (let col = 0; col < board[0].length; col++) {
			if (board[row][col] !== '.') {
				let boxNumber = getBoxNumber(row, col)
				rows.get(row).add(board[row][col])
				cols.get(col).add(board[row][col])
				boxes.get(boxNumber).add(board[row][col])
			}
		}
	}

	dfs(0, 0)

	function dfs(x, y) {
		if (x === 9) return true
		let ny = (y + 1) % 9
		let nx = ny === 0 ? x + 1 : x

		if (board[x][y] !== '.') return dfs(nx, ny)
		let boxNumber = getBoxNumber(x, y)
		for (let num = 1; num < 10; num++) {
			let val = num.toString()
			if (rows.get(x).has(val) || cols.get(y).has(val) || boxes.get(boxNumber).has(val)) {
				continue
			}

			rows.get(x).add(val)
			cols.get(y).add(val)
			boxes.get(boxNumber).add(val)
			board[x][y] = val
			if (dfs(nx, ny) === true) {
				return true
			}

			rows.get(x).delete(val)
			cols.get(y).delete(val)
			boxes.get(boxNumber).delete(val)
			board[x][y] = '.'
		}

		return false
	}
}

function getBoxNumber(row, col) {
	let x = Math.floor(row / 3)
	let y = Math.floor(col / 3)
	return 3 * x + y
}
