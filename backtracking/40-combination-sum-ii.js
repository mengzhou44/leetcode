/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
    if (candidates.length === 0) return []
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
            if (i !== index && candidates[i] === candidates[i - 1]) continue
            if (candidates[i] > target) break
            cur.push(candidates[i])
            dfs(i + 1, target - candidates[i], [...cur])
            cur.pop()
        }
    }
}
