class TrieNode {
	constructor() {
		this.children = new Map()
		this.isWord = false
	}
}

class WordDictionary {
	constructor() {
		this.root = new TrieNode()
	}

	addWord(word) {
		let cur = this.root
		for (let i = 0; i < word.length; i++) {
			if (!cur.children.has(word[i])) {
				cur.children.set(word[i], new TrieNode())
			}
			cur = cur.children.get(word[i])
		}
		cur.isWord = true
	}

	search(word) {
		function dfs(cur, index) {
			if (!cur || (index === word.length && !cur.isWord)) {
				return false
			}

			if (index === word.length && cur.isWord) {
				return true
			}

			if (word[index] === '.') {
				for (let c of 'abcedfghijklmnopqrstuvwxyz') {
					if (dfs(cur.children.get(c), index + 1)) return true
				}
				return false
			}

			return dfs(cur.children.get(word[index]), index + 1)
		}

		return dfs(this.root, 0)
	}
}
