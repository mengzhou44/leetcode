/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
    if (nums === null || nums.length === 0) {
        return 0
    }

    let l = 0
    let r = nums.length - 1
    while (true) {
        let pos = partition(l, r)
        if (pos + 1 === k) {
            return nums[pos]
        } else if (pos + 1 > k) {
            r = pos - 1
        } else {
            l = pos + 1
        }
    }

    function partition(l, r) {
        let left = l + 1
        while (left <= r) {
            if (nums[left] <= nums[l] && nums[r] >= nums[l]) {
                swap(left, r)
                left++
                r--
            }
            if (nums[left] > nums[l]) {
                left++
            }
            if (nums[r] < nums[l]) {
                r--
            }
        }
        swap(l, r)
        return r
    }
    function swap(i, j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
}
