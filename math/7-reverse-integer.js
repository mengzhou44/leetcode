/**
 * @param {number} x
 * @return {number}
 */
function reverse(num) {
  let sign = 1
  if (num < 0) {
    num = Math.abs(num)
    sign = -1
  }
  let value = 0
  while (num > 0) {
    let temp = num % 10
    value = 10 * value + temp
    num = Math.floor(num / 10)
  }

  if (is32BitInteger(value * sign)) {
    return value * sign
  }
  return 0
}

function is32BitInteger(num) {
  return num <= Math.pow(2, 31) - 1 && num >= Math.pow(2, 31) * -1
}
