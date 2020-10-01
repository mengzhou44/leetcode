function multiply(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  num1 = num1.split('').map((item) => parseInt(item))
  num2 = num2.split('').map((item) => parseInt(item))
  let result = new Array(num1.length + num2.length).fill(0)

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      let posLow = i + j + 1
      let posHigh = i + j
      let mul = result[posLow] + num1[i] * num2[j]
      result[posLow] = mul % 10
      result[posHigh] = result[posHigh] + Math.floor(mul / 10)
    }
  }

  while (result[0] === 0) {
    result.shift()
  }
  return result.join('')
}
