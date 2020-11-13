function wallsAndGates(rooms) {
	if (rooms === null || rooms.length === 0) return

	let m = rooms.length
	let n = rooms[0].length
	let map = new Map()

	for (let row = 0; row < m; row++) {
		for (let col = 0; col < n; col++) {
			if (rooms[row][col] === 'INF') {
				map.set([row, col], bfs(row, col))
			}
		}
	}

	for (let key of map.keys()) {
		rooms[key[0]][key[1]] = map.get(key)
	}

	return rooms

	function bfs(row, col) {
		let array = [{ row, col }]
		let distance = 0
		let visited = new Array(m)
		for (let i = 0; i < visited.length; i++) {
			visited[i] = new Array(n).fill(false)
		}

		while (array.length > 0) {
			let levelSize = array.length
			let count = 0
			while (count < levelSize) {
				const { row, col } = array.shift()
				visited[row][col] = true
				if (rooms[row][col] === 0) {
					return distance
				}

				if (isValid(row + 1, col, visited) === true) {
					array.push({ row: row + 1, col })
				}
				if (isValid(row - 1, col, visited) === true) {
					array.push({ row: row - 1, col })
				}

				if (isValid(row, col + 1, visited) === true) {
					array.push({ row, col: col + 1 })
				}
				if (isValid(row, col - 1, visited) === true) {
					array.push({ row, col: col - 1 })
				}
				count++
			}

			distance++
		}

		return 'INF'
	}

	function isValid(row, col, visited) {
		if (row < 0 || row > m - 1) return false
		if (col < 0 || col > n - 1) return false
		if (rooms[row][col] === -1) return false
		if (visited[row][col] === true) return false
		return true
	}
}

console.log(
	wallsAndGates([
		['INF', -1, 0, 'INF'],
		['INF', 'INF', 'INF', -1],
		['INF', -1, 'INF', -1],
		[0, -1, 'INF', 'INF'],
	])
)
