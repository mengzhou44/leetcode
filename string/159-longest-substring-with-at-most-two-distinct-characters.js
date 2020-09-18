// Given a string  s  , find the length of the longest substring  t that contains at most 2 distinct characters.

// Example 1:

// Input: "eceba"
// Output: 3
// Explanation: _t_ is "ece" which its length is 3.
// Example 2:

// Input: "ccaabbb"
// Output: 5
// Explanation: _t_ is "aabbb" which its length is 5.

function lengthOfLongestSubstringTwoDistinct(s) {
  if (s === null || s.length === 0) return 0

  let maxLength = 0
  let left = 0
  let map = new Map()
  for (let right = 0; right < s.length; right++) {
    if (!map.has(s[right])) {
      map.set(s[right], 1)
    } else {
      map.set(s[right], map.get(s[right]) + 1)
    }

    if (map.size === 1) {
      continue
    } else if (map.size > 2) {
      while (map.size > 2) {
        let count = map.get(s[left])
        map.set(s[left], count - 1)
        if (count === 1) {
          map.delete(s[left])
        }
        left++
      }
    } else {
      maxLength = Math.max(maxLength, right - left + 1)
    }
  }
  return maxLength
}

function lengthOfLongestSubstringTwoDistinct1(s) {
  if (s === null || s.length === 0) return 0

  let maxLength = 0
  let left = 0
  let array = []
  for (let right = 0; right < s.length; right++) {
    addToArray(array, s[right])
  
    while (array.length > 2) {
      let found = array.find((item) => item.ch === s[left])
      
      found.count--
      if (found.count === 0) {
        array = array.filter((item) => item.ch !== s[left])
      }
      left++
    }
    if (array.length === 2) {
      maxLength = Math.max(maxLength, right - left + 1)
    }
  }
  return maxLength
}

function addToArray(array, ch) {
  let found = array.find((item) => item.ch === ch)
  if (found !== undefined) {
    found.count++
  } else {
    array.push({
      ch,
      count: 1,
    })
  }
}

console.log(lengthOfLongestSubstringTwoDistinct('eceba'))
console.log(lengthOfLongestSubstringTwoDistinct('ccaabbb'))

console.log(lengthOfLongestSubstringTwoDistinct1('eceba'))
console.log(lengthOfLongestSubstringTwoDistinct1('ccaabbb'))
