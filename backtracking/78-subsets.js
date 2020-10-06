function subsets(nums) {
    let result = []
    dfs(0, [])
    return result

    function dfs(index, subset) {
        result.push(subset)

        for (let i = index; i < nums.length; i++) {
            subset.push(nums[i])
            dfs(i + 1, [...subset])
            subset.pop()
        }
    }
}
