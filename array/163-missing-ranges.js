//given a sorted integer Array, where the range of elements are in the inclusive range
// [lower, upper], returns its missing ranges

function findMissingRanges(nums, lower, upper) {
    let result = []
    if (nums[0] - lower > 1) {
        result.push(getMissingRange(lower - 1, nums[0]))
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] !== 1) {
            result.push(getMissingRange(nums[i - 1], nums[i]))
        }
    }

    if (upper - nums[nums.length - 1] > 1) {
        result.push(getMissingRange(nums[nums.length - 1], upper + 1))
    }

    return result
}

function getMissingRange(start, end) {
    if (end - start === 2) {
        return (start + 1).toString()
    }

    return `${start + 1}->${end - 1}`
}

console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99))
