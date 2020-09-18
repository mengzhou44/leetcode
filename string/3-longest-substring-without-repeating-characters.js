function lengthOfLongestSubstring(s) {
  if (s === '') return 0

  let left = 0
  let result = Number.MIN_SAFE_INTEGER
  let map = new Map()
  let right = 0
  while (right < s.length) {
    while (right < s.length && !map.has(s[right])) {
      map.set(s[right], 1)
      right++
    }
    result = Math.max(result, right - left)
    if (right === s.length) {
      break
    }
    while (s[left] !== s[right]) {
      map.delete(s[left])
      left++
    }
    left++
    right++
  }

  return result
}
