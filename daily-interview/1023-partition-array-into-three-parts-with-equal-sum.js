function canThreePartsEqualSum(array) {
  let total = array.reduce((sum, item) => sum + item)
  if (total % 3 !== 0) return false
  let temp = total / 3

  let left = 0
  let right = array.length - 1

  let leftSum = array[left]
  let rightSum = array[right]

  while (left + 1 < right) {    
      if (leftSum === temp && rightSum === temp) {
          return true
      }

      if (leftSum !== temp) {
          left++
          leftSum+=array[left]
      }

      if (rightSum !== temp) {
          right--
          rightSum+=array[right]
      }
  }
  return false
}

