function isPalindrome(x) {
  if (x < 0) return false
  let temp = x
  let value = 0
  while (temp > 0) {
    value = 10 * value + (temp % 10)
    temp = Math.floor(temp / 10)
  }
  return value === x
}
