function combinationSum3(k, n) {
    if (n === 0 || k === 0) return []
    let result = []
    dfs(1, n)
    return result

    function dfs(num, sum, cur = []) {
        if (sum > n) return
        if (cur.length === k && sum === 0) {
            result.push(cur)
            return
        }

        for (let i = num; i <= 9; i++) {
            cur.push(i)
            dfs(i + 1, sum - i, [...cur])
            cur.pop()
        }
    }
}
