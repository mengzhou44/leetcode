function canThreePartsEqualSum(array) {
    if (array.length < 3) return false
    let total = array.reduce((sum, item) => sum + item)
    if (total % 3 !== 0) return false

    let temp = total / 3

    let left = 0
    let right = array.length - 1
    let leftSum = array[0]
    let rightSum = array[array.length - 1]

    while (right - left > 1) {
        if (leftSum === temp && rightSum === temp) {
            return true
        } else if (leftSum !== temp) {
            left++
            leftSum += array[left]
        } else {
            right--
            rightSum += array[right]
        }
    }

    return false
}
