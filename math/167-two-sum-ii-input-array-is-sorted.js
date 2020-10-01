/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    if (nums.length < 2) return []
    let left = 1
    let right = nums.length
    while (left < right) {
        let sum = nums[left - 1] + nums[right - 1]
        if (sum === target) {
            return [left, right]
        } else if (sum > target) {
            right--
        } else {
            left++
        }
    }

    throw new Error('Not Found!')
}
