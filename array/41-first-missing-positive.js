//standard 
function firstMissingPositive(nums) {
    if (nums === null || nums.length === 0) return 1

    for (let i = 0; i < nums.length; i++) {
        while (
            nums[i] > 0 &&
            nums[i] <= nums.length &&
            nums[nums[i] - 1] !== nums[i]
        ) {
            swap(nums[i] - 1, i)
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1
        }
    }

    return nums.length + 1

    function swap(i, j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
}

function firstMissingPositive(nums) {
    nums = nums.filter((item) => item > 0).sort((a, b) => a - b)

    let result = 1
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue

        if (nums[i] === result) {
            result++
        } else {
            return result
        }
    }

    return result
}
