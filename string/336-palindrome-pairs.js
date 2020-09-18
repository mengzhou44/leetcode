/**
 * @param {string[]} words
 * @return {number[][]}
 */

function palindromePairs(words) {
  let result = []
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i === j) {
        continue
      }
      if (isPalindrome(words[i] + words[j])) {
        result.push([i, j])
      }
    }
  }

  return result
}

function isPalindrome(s) {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    if (s[left] !== s[right]) {
      return false
    }
    left++
    right--
  }

  return true
}

/**
 * @param {string[]} words
 * @return {number[][]}
 */

function palindromePairs(words) {
  let map = new Map()
  for (let i = 0; i < words.length; i++) {
    map.set(
      words[i]
        .split('')
        .reverse()
        .join(''),
      i
    )
  }
  let result = []
  for (let i = 0; i < words.length; i++) {
    let current = words[i]
    for (let j = 0; j < current.length; j++) {
      if (isPalindrome(current, j, current.length - 1)) {
        let suffix = current.substring(0, j)
        if (map.has(suffix)) {
          result.push([i, map.get(suffix)])
        }
      }
    }
    for (let j = current.length - 1; j >= 0; j--) {
      if (isPalindrome(current, 0, j)) {
        let prefix = current.substring(j + 1)
        if (map.has(prefix)) {
          result.push([map.get(prefix), i])
        }
      }
    }

    if (map.has(current) && i !== map.get(current)) {
      result.push([i, map.get(current)])
    }
  }

  return result
}

function isPalindrome(s, start, end) {
  while (start < end) {
    if (s[start] !== s[end]) {
      return false
    }
    start++
    end--
  }

  return true
}
