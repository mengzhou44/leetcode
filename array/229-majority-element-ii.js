function majorityElement(nums) {
    let array = []
    for (let i = 0; i < nums.length; i++) {
        let found = array.find((item) => item.value === nums[i])
        if (found === undefined) {
            array.push({ value: nums[i], times: 1 })
        } else {
            found.times++
        }
        array.sort((a, b) => b.times - a.times)
    }

    let result = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].times > Math.floor(nums.length / 3)) {
            result.push(array[i].value)
        }
    }
    return result
}
