function combinationSum4(nums, target) {
    if (nums.length === 0) return []
    let count = 0
    dfs(target)
    return count

    function dfs(target, cur = []) {
        if (target === 0) {
            count++
            return
        }
        if (target < 0) return

        for (let i = 0; i < nums.length; i++) {
            cur.push(nums[i])
            dfs(target - nums[i], [...cur])
            cur.pop()
        }
    }
}
