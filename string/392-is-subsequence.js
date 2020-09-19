function isSubsequence(s, t) {
  let array = s.split('')

  for (let c of t) {
    if (c === array[0]) {
      array.shift()
    }
  }

  return array.length === 0
}
