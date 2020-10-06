function numTrees(n) {
    if (n === 0 || n === 1) return 1
    let result = 0
    for (let i = 0; i <= n - 1; i++) {
        result += numTrees(i) * numTrees(n - 1 - i)
    }
    return result
}
