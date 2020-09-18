// ###Question Given a string, determine if a permutation of the string could form a palindrome.

// For example,

// “code” -> False, “aab” -> True, “carerac” -> True.

// ###Solution Two cases of palindrome:

function canPermutePalindrome(s) {
  let map = new Map()
  for (let c of s) {
    if (!map.has(c)) {
      map.set(c, 1)
    } else {
      map.set(c, map.get(c) + 1)
    }
  }

  let oddCount = 0
  for (let key of map.keys()) {
    if (map.get(key) % 2 === 1) {
      oddCount++
      if (oddCount > 1) return false
    }
  }

  return true
}
