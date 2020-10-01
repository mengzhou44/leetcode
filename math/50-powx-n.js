function myPow(x, n) {
    if (n < 0) return 1 / myPow(x, -n)

    let result = 1
    let current = x
    for (let i = n; i > 0; i = Math.floor(i / 2)) {
        if (i % 2 === 1) {
            result *= current
        }
        current = current * current
    }

    return result
}
