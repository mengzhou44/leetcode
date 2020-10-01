function countPrimes(n) {
    let array = new Array(n).fill(true)

    array[0] = false
    array[1] = false

    for (let i = 2; i < n; i++) {
        for (let j = i; j < n; j = j + i) {
            if (i + j < n) {
                array[i + j] = false
            }
        }
    }

    return array.filter((item) => item === true).length
}
