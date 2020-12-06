class TrieNode {
	constructor() {
		this.children = new Map()
		this.isWord = false
	}
}

class Trie {
	constructor() {
		this.root = new TrieNode()
	}

	insert(word) {
		let cur = this.root
		for (let c of word) {
			if (!cur.children.has(c)) {
				cur.children.set(c, new TrieNode())
			}
			cur = cur.children.get(c)
		}
		cur.isWord = true
	}

	search(word) {
		function dfs(cur, index) {
			if (cur === undefined) return false
			if (index === word.length && !cur.isWord) return false

			if (index === word.length && cur.isWord) return true

			if (!cur.children.has(word[index])) return false

			return dfs(cur.children.get(word[index]), index + 1)
		}

		return dfs(this.root, 0)
	}

	startsWith(word) {
		let cur = this.root
		for (let c of word) {
			if (!cur.children.has(c)) {
				return false
			}
			cur = cur.children.get(c)
        }
        
		return true
	}
}
