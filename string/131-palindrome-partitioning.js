function partition(s) {
  let result = []
  decomposeString(s, 0)

  function decomposeString(s, startIndex, cache = []) {
    if (startIndex === s.length) {
      result.push([...cache])
      return
    }

    for (let endIndex = startIndex + 1; endIndex <= s.length; endIndex++) {
      let temp = s.substring(startIndex, endIndex)
      if (isPalindrome(temp)) {
        cache.push(temp)
        decomposeString(s, endIndex, cache)
        cache.pop()
      }
    }
  }

  return result
}

function isPalindrome(s) {
  return (
    s
      .split('')
      .reverse()
      .join('') === s
  )
}
