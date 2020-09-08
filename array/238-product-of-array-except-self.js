function productExceptSelf(nums) {
    let leftArray = []
    let rightArray = []
    let product = 1
    for (let i = 0; i < nums.length; i++) {
        product = product * nums[i]
        leftArray.push(product)
    }
    product = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        product = product * nums[i]
        rightArray.push(product)
    }

    let result = []
    for (let i = 0; i < nums.length; i++) {
        let temp
        if (i === 0) {
            temp = rightArray[nums.length - 1 - i - 1]
        } else if (i === nums.length - 1) {
            temp = leftArray[i - 1]
        } else {
            temp = leftArray[i - 1] * rightArray[nums.length - 1 - i - 1]
        }

        result.push(temp)
    }
    return result
}
