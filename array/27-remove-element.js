function removeElement(nums, val) {
    let current = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[current] = nums[i]
            current++
        }
    }

    return current
}
