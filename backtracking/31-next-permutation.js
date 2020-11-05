/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
    if (nums.length === 1) return
    let i = nums.length - 2

    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--
    }
    if (i >= 0) {
        let j = nums.length - 1
        while (i < j && nums[j] <= nums[i]) {
            j--
        }
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    sort(nums, i + 1)
}

function sort(array, index) {
    for (let i = index; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
}
