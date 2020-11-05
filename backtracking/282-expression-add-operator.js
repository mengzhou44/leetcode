function addOperators(s, target) {
    let res = []
    if (s === null || s.length === 0) return res

    dfs('', 0, 0, 0)

    return res

    function dfs(path, pos, cal, revert) {
        if (pos === s.length) {
            if (cal === target) {
                res.push(path)
            }
            return
        }

        for (let i = pos; i < s.length; i++) {
            if (i !== pos && s[pos] === '0') break

            let cur = parseInt(s.substring(pos, i + 1))

            if (pos === 0) {
                dfs(path + cur, i + 1, cur, cur)
            } else {
                dfs(path + '+' + cur, i + 1, cal + cur, cur)
                dfs(path + '-' + cur, i + 1, cal - cur, -cur)
                dfs(
                    path + '*' + cur,
                    i + 1,
                    cal - revert + revert * cur,
                    revert * cur
                )
            }
        }
    }
}
