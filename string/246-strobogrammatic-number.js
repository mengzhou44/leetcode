// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

// Write a function to determine if a number is strobogrammatic. The number is represented as a string.

// For example, the numbers "69", "88", and "818" are all strobogrammatic.

function isStrobogrammatic(num) {
  let array = num.split('')

  let filtered = array.filter((a) => !['0', '1', '6', '8', '9'].includes(a))
  if (filtered.length > 0) return false
  let left = 0
  let right = array.length - 1
  while (left < right) {
    let temp = array[left]
    array[left] = rotate(array[right])
    array[right] = rotate(temp)
    left++
    right--
  }
  return array.join('') === num

  function rotate(digit) {
    switch (digit) {
      case '0':
      case '1':
      case '8':
        return digit
      case '6':
        return '9'
      default:
        return '6'
    }
  }
}

console.log(isStrobogrammatic('69'))
console.log(isStrobogrammatic('88'))
console.log(isStrobogrammatic('962'))

function isStrobogrammatic1(num) {
  let array = num.split('')

  let left = 0
  let right = array.length - 1
  while (left < right) {
    switch (array[left]) {
      case '6':
        if (array[right] !== '9') {
          return false
        }
        break
      case '9':
        if (array[right] !== '6') {
          return false
        }
        break
      case '0':
      case '1':
      case '8':
        if (array[right] !== array[left]) {
          return false
        }
        break
      default:
        return false
    }
    left++
    right--
  }
  return true
}

console.log(isStrobogrammatic1('69'))
console.log(isStrobogrammatic1('88'))
console.log(isStrobogrammatic1('962'))

function isStrobogrammatic2(num) {
  let array = num.split('')
  let map = new Map()
  map.set('0', '0')
  map.set('1', '1')
  map.set('6', '9')
  map.set('8', '8')
  map.set('9', '6')

  let left = 0
  let right = array.length - 1
  while (left < right) {
    if (map.get(array[left]) !== array[right]) {
      return false
    }
    left++
    right--
  }
  return true
}


console.log(isStrobogrammatic2('69'))
console.log(isStrobogrammatic2('88'))
console.log(isStrobogrammatic2('962'))