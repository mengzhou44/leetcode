function findDuplicate(nums) {
    let left = 1
    let right = nums.length - 1

    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        let count1 = 0
        let count2 = 0
        for (let num of nums) {
            if (num < mid) {
                count1++
            }
            if (num === mid) {
                count2++
            }
        }

        if (count2 > 1) return mid
        if (count1 <= mid - 1) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return left
}
