function maxProduct(nums) {
    if (nums === null || nums.length === 0) return 0
    let res = nums[0]
    let current_max = nums[0]
    let current_min = nums[0]

    for (let i = 1; i < nums.length; i++) {
        let temp = current_max
        current_max = Math.max(
            Math.max(current_max * nums[i], current_min * nums[i]),
            nums[i]
        )
        current_min = Math.min(
            Math.min(temp * nums[i], current_min * nums[i]),
            nums[i]
        )

        res = Math.max(res, current_max)
    }

    return res
}
