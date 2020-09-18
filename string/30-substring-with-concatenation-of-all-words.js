/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findSubstring(s, words) {
  if (s.length === 0 || words.length === 0) return []

  let map = createMap(words)
  let n = words.length
  let m = words[0].length
  let result = []
  for (let i = 0; i <= s.length - n * m; i++) {
    if (containsAll(i) === true) {
      result.push(i)
    }
  }

  function containsAll(index) {
    let cloned = new Map(map)
    for (let i = index; i < index + n * m; i = i + m) {
      let word = s.substring(i, i + m)
      if (!cloned.has(word)) {
        return false
      } else {
        let count = cloned.get(word)
        cloned.set(word, count - 1)
        if (count === 1) {
          cloned.delete(word)
        }
      }
    }
    return true
  }

  return result
}

function createMap(words) {
  let map = new Map()
  for (let word of words) {
    if (!map.has(word)) {
      map.set(word, 1)
    } else {
      map.set(word, map.get(word) + 1)
    }
  }
  return map
}
