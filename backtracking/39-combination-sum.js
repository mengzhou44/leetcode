function combinationSum(candidates, target) {
    candidates.sort((a, b) => a - b)
    let result = []
    dfs(0, target)
    return result
    function dfs(index, target, cur = []) {
        if (target === 0) {
            result.push(cur)
            return
        }
        for (let i = index; i < candidates.length; i++) {
            if (candidates[i] > target) break
            cur.push(candidates[i])
            dfs(i, target - candidates[i], [...cur])
            cur.pop()
        }
    }
}
