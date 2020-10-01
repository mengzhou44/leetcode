function isPowerOfThree(n) {
    if (n <= 0) return false
    if (n === 1) return true
    while (n > 1) {
        if (n % 3 === 0) {
            n = n / 3
        } else {
            return false
        }
    }

    return true
}

function isPowerOfThree(n) {
    if (n <= 0) return false

    while (n > 0) {
        if (n === 1) return true
        if (n % 3 === 1) return false
        n = n / 3
    }

    return false
}

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
    if (n <= 0) return false

    if (n === 1) return true

    if (n % 3 !== 0) return false

    return isPowerOfThree(n / 3)
}
