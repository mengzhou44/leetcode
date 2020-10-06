/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permuteUnique(nums) {
    if (nums === null || nums.length === 0) return []
    nums.sort((a, b) => a - b)
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
            if (i > 0 && nums[i] === nums[i - 1] && visited[i - 1] === false) {
                continue
            }

            cur.push(nums[i])
            visited[i] = true
            dfs(visited, [...cur])
            visited[i] = false
            cur.pop()
        }
    }
}
