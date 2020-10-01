/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
function canMeasureWater(x, y, z) {
    if (x < y) return canMeasureWater(y, x, z)

    if (x + y === z) return true
    if (x - y === z || y - x === z) return true
    if (x + y < z) return false

    return z % gcd(x, y) === 0
}

function gcd(x, y) {
    while (y) {
        let t = y
        y = x % y
        x = t
    }
    return x
}
