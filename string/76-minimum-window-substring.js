/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  if (s.length < t.length) return ''
  let map = createMap(t)

  let left = 0
  let index = 0
  let minLength = Number.MAX_SAFE_INTEGER
  let matchCount = 0

  for (let right = 0; right < s.length; right++) {
    if (!map.has(s[right])) {
      continue
    }
    let count = map.get(s[right])
    map.set(s[right], count - 1)
    if (count === 1) {
      //1=>0
      matchCount++
    }

    while (matchCount === map.size) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1
        index = left
      }

      let leftMost = s[left++]
      if (!map.has(leftMost)) {
        continue
      }

      let count = map.get(leftMost)
      map.set(leftMost, count + 1)
      if (count === 0) {
        // 0=>1
        matchCount--
      }
    }
  }

  let result =
    minLength === Number.MAX_SAFE_INTEGER
      ? ''
      : s.substring(index, index + minLength)
  return result
}

function createMap(t) {
  let map = new Map()
  for (let c of t) {
    if (!map.has(c)) {
      map.set(c, 1)
    } else {
      map.set(c, map.get(c) + 1)
    }
  }

  return map
}
