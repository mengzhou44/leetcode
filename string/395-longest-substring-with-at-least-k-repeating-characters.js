function longestSubstring(s, k) {
  if (s === null || s.length === 0) return 0

  let hash = new Array(26).fill(0)

  for (let c of s) {
    let i = c.charCodeAt(0)
    hash[getCharIndex(c)]++
  }

  let fullString = true
  for (let item of hash) {
    if (item > 0 && item < k) {
      fullString = false
      break
    }
  }
  if (fullString === true) {
    return s.length
  }

  let left = 0
  let right = 0
  let result = 0
  while (right < s.length) {
    if (hash[getCharIndex(s[right])] < k) {
      result = Math.max(result, longestSubstring(s.substring(left, right), k))
      left = right + 1
    }
    right++
  }
  result = Math.max(result, longestSubstring(s.substring(left), k))
  return result
}

function getCharIndex(c) {
  return c.charCodeAt(0) - 'a'.charCodeAt(0)
}
