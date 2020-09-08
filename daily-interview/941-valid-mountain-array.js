/**
 * @param {number[]} A
 * @return {boolean}
 */
function validMountainArray(A) {
    if (A.length < 3) return false
    let state = 'up'
    if (A[0] > A[1]) return false
    for (let i = 1; i < A.length; i++) {
        if (state === 'up') {
            if (A[i] > A[i - 1]) continue
            if (A[i] === A[i - 1]) return false
            state = 'down'
        } else {
            if (A[i] >= A[i - 1]) return false
        }
    }
    if (state === 'up') return false
    return true
}
