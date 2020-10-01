function sortedListToBST(head) {
    if (head === null) return null
    if (head.next === null) return new TreeNode(head.val)
    let slow = head
    let fast = head
    let prev = null
    while (fast && fast.next) {
        fast = fast.next.next
        prev = slow
        slow = slow.next
    }
    prev.next = null
    let root = new TreeNode(slow.val)
    root.left = sortedListToBST(head)
    root.right = sortedListToBST(slow.next)
    return root
}
