function maxSubArray(nums) {
    if (nums.length === 1) return nums[0]

    let array = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        if (array[i - 1] > 0) {
            array[i] = array[i - 1] + nums[i]
        } else {
            array[i] = nums[i]
        }
    }

    let max = Number.MIN_SAFE_INTEGER
    for (let item of array) {
        max = Math.max(max, item)
    }
    return max
}

function maxSubArray(nums) {
    let max = Number.MIN_SAFE_INTEGER
    for (let num of nums) {
        max = Math.max(num, max)
    }
    if (max < 0) return max

    let local_max = 0
    let global_max = 0
    for (let num of nums) {
        local_max = Math.max(0, local_max + num)
        global_max = Math.max(global_max, local_max)
    }

    return global_max
}
