/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
function findLadders(beginWord, endWord, wordList) {
	let result = []

	let wordSet = new Set()
	for (let word of wordList) {
		wordSet.add(word)
	}

	if (!wordSet.has(endWord)) return result
	let startSet = new Set()
	startSet.add(beginWord)

	let map = new Map()
	bfs(startSet, endWord, map, wordSet)
	let path = [beginWord]
	dfs(beginWord, endWord, map, result, path)
	return result
}

function dfs(word, endWord, map, result, path) {
	if (word === endWord) {
		result.push([...path])
		return
	}

	if (map.has(word) === false) return

	for (let nextWord of map.get(word)) {
		path.push(nextWord)
		dfs(nextWord, endWord, map, result, path)
		path.pop()
	}
}

function bfs(startSet, endWord, map, wordSet) {
	if (startSet.size === 0) return

	for (let s of startSet) {
		wordSet.delete(s)
	}

	let temp = new Set()
	let finish = false
	let letters = 'abcdefghijklmnopqrstuvwxyz'
	for (let s of startSet) {
		let chs = s.split('')
		for (let i = 0; i < chs.length; i++) {
			let letter = chs[i]
			for (let choice of letters) {
				chs[i] = choice
				let word = chs.join('')
				if (wordSet.has(word)) {
					if (word == endWord) {
						finish = true
					} else {
						temp.add(word)
					}

					if (map.has(s) === false) {
						map.set(s, [])
					}

					map.get(s).push(word)
				}
			}

			chs[i] = letter
		}
	}
	if (finish === false) {
		bfs(temp, endWord, map, wordSet)
	}
}
