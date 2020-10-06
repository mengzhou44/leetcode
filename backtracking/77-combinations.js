/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
    if (n === 0) return []
    if (n === 1) return [[1]]
    let result = []
    dfs(1)
    return result

    function dfs(index, cur = []) {
        if (cur.length === k) {
            result.push(cur)
            return
        }
        for (let i = index; i <= n; i++) {
            cur.push(i)
            dfs(i + 1, [...cur])
            cur.pop()
        }
    }
}
