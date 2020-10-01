function isPerfectSquare(num) {
    if (num === 1) return true
    let left = 1
    let right = num

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let temp = mid * mid
        if (temp === num) {
            return true
        } else if (temp > num) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return false
}
