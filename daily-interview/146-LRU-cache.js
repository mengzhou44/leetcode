class Node {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.prev = null
        this.next = null
    }
}

class LRUCache {
    constructor(capacity) {
        this.map = new Map()
        this.capacity = capacity
        this.size = 0
        this.head = new Node(0, 0)
        this.tail = new Node(0, 0)
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    get(key) {
        if (!this.map.has(key)) return -1
        let node = this.map.get(key)
        this.removeNode(node)
        this.addToHead(node)
        return node.val
    }

    put(key, val) {
        if (this.map.has(key)) {
            let node = this.map.get(key)
            this.removeNode(node)
        }
        this.addToHead(new Node(key, val))
    }

    removeNode(node) {
        let prev = node.prev
        let next = node.next
        prev.next = next
        next.prev = prev
        this.map.delete(node.key)
        this.size--
    }

    addToHead(node) {
        let next = this.head.next
        this.head.next = node
        node.next = next
        next.prev = node
        node.prev = this.head

        this.map.set(node.key, node)
        this.size++

        if (this.size > this.capacity) {
            let nodeToRemove = this.tail.prev
            let prev = nodeToRemove.prev
            prev.next = this.tail
            this.tail.prev = prev
            this.map.delete(nodeToRemove.key)
            this.size--
        }
    }
}
