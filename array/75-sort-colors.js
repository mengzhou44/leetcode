function sortColors(nums) {
    let pos = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            swap(i, pos++)
        }
    }

    for (let j = pos; j < nums.length; j++) {
        if (nums[j] === 1) {
            swap(j, pos++)
        }
    }

    function swap(i, j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
}
