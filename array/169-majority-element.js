function majorityElement(nums) {
    if (nums.length === 1) return nums[0]

    let result = nums[0]
    let count = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === result) {
            count++
        } else {
            count--
            if (count === 0) {
                count = 1
                result = nums[i]
            }
        }
    }

    return result
}
