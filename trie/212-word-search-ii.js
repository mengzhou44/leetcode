class TrieNode {
	constructor() {
		this.children = new Map()
		this.word = null
	}
}

function findWords(board, words) {
	if (board === null || board.length === 0) return []
	let root = buildTrie(words)

	let m = board.length
	let n = board[0].length
	let result = []

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			dfs(i, j, root)
		}
	}

	return result

	function dfs(i, j, cur, word = '') {
		if (cur === undefined) return
		if (cur.word === word) {
			result.push(word)
			cur.word = null
		}

		if (i < 0 || i >= m || j < 0 || j >= n) return

		let ch = board[i][j]
		if (ch === '*' || !cur.children.has(ch)) return

		board[i][j] = '*'

		dfs(i + 1, j, cur.children.get(ch), word + ch)
		dfs(i - 1, j, cur.children.get(ch), word + ch)
		dfs(i, j + 1, cur.children.get(ch), word + ch)
		dfs(i, j - 1, cur.children.get(ch), word + ch)

		board[i][j] = ch
	}
}

function initializeVisited(m, n) {
	let res = new Array(m)
	for (let i = 0; i < m; i++) {
		res[i] = new Array(n).fill(false)
	}
	return res
}

function buildTrie(words) {
	let root = new TrieNode()

	for (let word of words) {
		let cur = root
		for (let c of word) {
			if (!cur.children.has(c)) {
				cur.children.set(c, new TrieNode())
			}

			cur = cur.children.get(c)
		}
		cur.word = word
	}
	return root
}
