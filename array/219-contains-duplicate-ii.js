function containsNearbyDuplicate(nums, k) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let prev = map.get(nums[i])
            if (i - prev <= k) {
                return true
            }
        }
        map.set(nums[i], i)
    }
    return false
}
