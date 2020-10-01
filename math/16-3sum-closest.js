function threeSumClosest(nums, target) {
    let result = Number.MAX_SAFE_INTEGER
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            let sum = nums[left] + nums[i] + nums[right]
            if (Math.abs(result - target) > Math.abs(sum - target)) {
                result = sum
            }
            if (sum > target) {
                right--
            } else {
                left++
            }
        }
    }
    return result
}
