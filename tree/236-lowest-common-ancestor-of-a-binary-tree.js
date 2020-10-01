function lowestCommonAncestor(root, p, q) {
    if (root === null) return null

    if (covers(root.left, p) && covers(root.left, q)) {
        return lowestCommonAncestor(root.left, p, q)
    }
    if (covers(root.right, p) && covers(root.right, q)) {
        return lowestCommonAncestor(root.right, p, q)
    }
    return root
}

function covers(node1, node2) {
    if (node1 === null) return false
    if (node1.val === node2.val) return true

    return covers(node1.left, node2) || covers(node1.right, node2)
}

 