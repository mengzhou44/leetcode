function minSubArrayLen(s, nums) {
    let left = 0
    let sum = 0
    let result = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        while (sum >= s && left <= i) {
            result = Math.min(result, i - left + 1)
            sum = sum - nums[left]
            left++
        }
    }

    return result === Number.MAX_SAFE_INTEGER ? 0 : result
}

function minSubArrayLen(s, nums) {
    if (nums.length === 0) return 0
    let prefixSum = []
    let sum = 0
    for (let num of nums) {
        sum += num
        prefixSum.push(sum)
    }

    let minLength = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            let sum
            if (i > 0) {
                sum = prefixSum[j] - prefixSum[i - 1]
            } else {
                sum = prefixSum[j]
            }
            if (sum >= s) {
                minLength = Math.min(minLength, j - i + 1)
            }
        }
    }

    if (minLength === Number.MAX_SAFE_INTEGER) {
        return 0
    }
    return minLength
}
