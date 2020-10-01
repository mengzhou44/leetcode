function threeSum(nums) {
    nums.sort((a, b) => a - b)
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let low = i + 1
        let high = nums.length - 1

        while (low < high) {
            let sum = nums[i] + nums[low] + nums[high]
            if (sum === 0) {
                result.push([nums[i], nums[low], nums[high]])
                while (low < high && nums[low] === nums[low + 1]) {
                    low++
                }
                while (low < high && nums[high] === nums[high - 1]) {
                    high--
                }
                low++
                high--
            } else if (sum > 0) {
                high--
            } else {
                low++
            }
        }
    }
    return result
}
