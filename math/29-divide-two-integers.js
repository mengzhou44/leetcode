function divide(dividend, divisor) {
    let sign = 1
    if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
        sign = -1
    }

    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)

    let result = sign * helper(dividend, divisor)

    if (result > Math.pow(2, 31) - 1) {
        result = Math.pow(2, 31) - 1
    } else if (result < -1 * Math.pow(2, 31)) {
        result = -1 * Math.pow(2, 31)
    }

    return result
}

function helper(dividend, divisor) {
    if (dividend < divisor) return 0

    let multiple = 1
    let sum = divisor
    while (sum + sum < dividend) {
        sum += sum
        multiple += multiple
    }

    return multiple + helper(dividend - sum, divisor)
}
