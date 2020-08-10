function removeDuplicates(nums) {
    let current = 0

    let count = 0
    let repeatedTimes = 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[current]) {
            repeatedTimes++
            if (repeatedTimes > 2) {
                count++
            } else {
                current++
                nums[current] = nums[i]
            }
        } else {
            current++
            nums[current] = nums[i]
            repeatedTimes = 1
        }
    }

    return nums.length - count
}
