function shortestPalindrome(s) {
  if (s.length === 0 || s === null) return s
  let i = 0
  let j = s.length - 1
  let end = s.length - 1
  while (i < j) {
    if (s[i] === s[j]) {
      i++
      j--
    } else {
      i = 0
      end--
      j = end
    }
  }

  return (
    s
      .substring(end + 1)
      .split('')
      .reverse()
      .join('') + s
  )
}
