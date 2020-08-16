function increasingTriplet(nums) {
    if (nums.length < 3) return false

    let min1 = Number.MAX_SAFE_INTEGER

    let min2 = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > min2) {
            return true
        } else if (nums[i] < min1) {
            min1 = nums[i]
        } else if (nums[i] > min1 && nums[i] < min2) {
            min2 = nums[i]
        }
    }

    return false
}
