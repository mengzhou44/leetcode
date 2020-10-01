/**
 * @param {number} num
 * @return {boolean}
 */
function isPowerOfFour(num) {
    if (num <= 0) return false

    if (num === 1) return true

    if (num % 4 !== 0) return false

    return isPowerOfFour(num / 4)
}
