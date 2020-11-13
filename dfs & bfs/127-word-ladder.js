/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function ladderLength(beginWord, endWord, wordList) {
	let wordSet = new Set()
	for (let word of wordList) {
		wordSet.add(word)
	}
	let distance = 0
	let array = [beginWord]
	while (array.length > 0) {
		let levelSize = array.length

		let count = 0
		while (count < levelSize) {
			let word = array.shift()
			if (word === endWord) return distance + 1
			wordSet.delete(word)
			let found = findNeighbourWords(wordSet, word)

			for (let item of found) {
				if (!array.includes(item)) {
					array.push(item)
				}
			}

			count++
		}
		distance++
	}
	return 0

	function findNeighbourWords(wordSet, word) {
		let result = []
		let letters = 'abcdefghijklmnopqrstuvwxyz'

		for (let i = 0; i < word.length; i++) {
			let temp = word[i]
			for (let j = 0; j < 26; j++) {
				let letter = letters[j]
				let newWord = word.substring(0, i) + letter + word.substring(i + 1)
				if (wordSet.has(newWord)) {
					result.push(newWord)
				}
			}
		}

		return result
	}
}
