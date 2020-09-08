/**
 * @param {number} num
 * @return {boolean}
 */
function checkPerfectNumber(num) {
    if (num === 1) return false
    let sum = 1
    let target = num
    let i = 2
    while (i < num) {
        if (num % i === 0) {
            sum += i
        }
        i++
    }
    return sum === target
}
