function isValid(str) {
  let stack = []
  let map = new Map()
  map.set('(', ')')
  map.set('[', ']')
  map.set('{', '}')

  for (let c of str) {
    if ('([{'.split('').includes(c)) {
      stack.push(c)
    } else {
      if (stack.length === 0) return false
      let ch = stack.pop()
      if (map.get(ch) !== c) return false
    }
  }
  return stack.length === 0
}
