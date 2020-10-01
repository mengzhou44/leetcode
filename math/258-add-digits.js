function addDigits(num) {
  while (num > 9) {
    num = helper(num)
  }
  return num

  function helper(num) {
    let value = 0
    while (num > 0) {
      value += num % 10
      num = Math.floor(num / 10)
    }
    return value
  }
}
