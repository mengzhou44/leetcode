function climbStairs(n) {
    if (n < 3) return n
    let prev = 1
    let cur = 2
    for (let i = 3; i <= n; i++) {
        let temp = prev
        prev = cur
        cur = cur + temp
    }

    return cur
}
