function rotate(nums, k) {
    k = k % nums.length
    let temp = []
    for (let i = nums.length - k; i < nums.length; i++) {
        temp.push(nums[i])
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i >= k) {
            nums[i] = nums[i - k]
        } else {
            nums[i] = temp[i]
        }
    }
}
