function removeDuplicates(nums) {
    let current = 0
    let count = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[current]) {
            count++
        } else {
            current++
            nums[current] = nums[i]
        }
    }
    return nums.length - count
}
