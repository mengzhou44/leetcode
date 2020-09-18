/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
  let stack = []
  let start = -1
  let res = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else {
      if (stack.length === 0) {
        start = i
      } else {
        stack.pop()
        if (stack.length === 0) {
          res = Math.max(res, i - start)
        } else {
          res = Math.max(res, i - stack[stack.length - 1])
        }
      }
    }
  }
  return res
}
