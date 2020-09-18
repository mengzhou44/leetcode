function isPalindrome(s) {
  let charTable = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('')
  let array = s
    .split('')
    .filter((item) => isAlphaNumeric(item))
    .map((item) => item.toLowerCase())

  let left = 0
  let right = array.length - 1
  while (left < right) {
    if (array[left] !== array[right]) {
      return false
    }
    left++
    right--
  }
  return true

  function isAlphaNumeric(ch) {
    return charTable.includes(ch.toLowerCase())
  }
}

function isPalindrome(s) {
  let charTable = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('')
  let left = 0
  let right = s.length - 1
  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) {
      left++
    }
    while (left < right && !isAlphaNumeric(s[right])) {
      right--
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false
    }
    left++
    right--
  }
  return true

  function isAlphaNumeric(ch) {
    return charTable.includes(ch.toLowerCase())
  }
}
