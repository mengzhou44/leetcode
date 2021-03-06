function sortedArrayToBST(nums) {
    if (nums.length == 0) {
        return null
    }
    if (nums.length == 1) {
        return new TreeNode(nums[0])
    }
    let mid = Math.floor(nums.length / 2)

    let left = nums.slice(0, mid)
    let right = nums.slice(mid + 1)
    let root = new TreeNode(nums[mid])
    root.left = sortedArrayToBST(left)
    root.right = sortedArrayToBST(right)

    return root
}
