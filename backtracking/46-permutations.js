/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
    if (nums === null || nums.length === 0) return []

    let result = []
    let visited = new Array(nums.length).fill(false)
    dfs(visited)

    return result

    function dfs(visited, cur = []) {
        if (cur.length === nums.length) {
            result.push(cur)
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (visited[i] === true) continue
            cur.push(nums[i])
            visited[i] = true
            dfs(visited, [...cur])
            visited[i] = false
            cur.pop()
        }
    }
}
