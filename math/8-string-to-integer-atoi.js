/**
 * @param {string} str
 * @return {number}
 */
function myAtoi(str) {
  str = str.trim()
  let sign = 1
  if (str.startsWith('-')) {
    sign = -1
    str = str.slice(1)
  } else if (str.startsWith('+')) {
    sign = 1
    str = str.slice(1)
  }
  let array = str.split('')
  let temp = []
  while (array.length > 0) {
    let c = array.shift()
    if (isNumeric(c)) {
      temp.push(c)
    } else {
      break
    }
  }
  if (temp.length === 0) return 0

  let result = parseInt(temp.join('')) * sign

  if (result > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1

  if (result < -Math.pow(2, 31)) return -Math.pow(2, 31)

  return result
}

function isNumeric(c) {
  return '0123456789'.includes(c)
}
