/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
    if (nums === null || nums.length < 4) return []
    nums = nums.sort((a, b) => a - b)
    let result = []
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let left = j + 1
            let right = nums.length - 1
            let newTarget = target - nums[i] - nums[j]
            while (left < right) {
                let sum = nums[left] + nums[right]
                if (sum === newTarget) {
                    addToResult(
                        nums[i],
                        nums[j],
                        nums[left],
                        nums[right],
                        result
                    )
                    left++
                    right--
                } else if (sum > newTarget) {
                    right--
                } else {
                    left++
                }
            }
        }
    }

    return result
}

function addToResult(a, b, c, d, result) {
    let found = result.find(
        (item) =>
            item[0] === a && item[1] === b && item[2] === c && item[3] === d
    )
    if (found === undefined) {
        result.push([a, b, c, d])
    }
}
