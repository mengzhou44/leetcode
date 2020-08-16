function sortColors(nums) {
    let l = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            swap(i, l)
            l++
        }
    }

    for (let i = l; i < nums.length; i++) {
        if (nums[i] === 1) {
            swap(i, l)
            l++
        }
    }

    function swap(i, j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
}
