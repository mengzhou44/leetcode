function isNumber(s) {
  let eSeen = false
  let dotSeen = false
  let numSeen = false
  s = s.trim()
  for (let i = 0; i < s.length; i++) {
    if (isDigit(s[i])) {
      console.log('step1')
      numSeen = true
    } else if (s[i] === 'e') {
      if (eSeen || !numSeen) {
        return false
      }
      eSeen = true
      numSeen = false
    } else if (s[i] === '.') {
      if (dotSeen || eSeen) return false
      dotSeen = true
    } else if (s[i] === '+' || s[i] === '-') {
      if (i !== 0 && s[i - 1] !== 'e') {
        return false
      }
    } else {
      return false
    }
  }

  return numSeen

  function isDigit(c) {
    return '0123456789'.split('').includes(c)
  }
}
