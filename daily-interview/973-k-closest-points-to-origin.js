function kClosest(points, K) {
    let queue = new PriorityQueue(K, (a, b) => {
        if (a.distance > b.distance) return true
        return false
    })

    for (let i = 0; i < points.length; i++) {
        let item = {
            value: points[i],
            distance: points[i][1] * points[i][1] + points[i][0] * points[i][0],
        }
        queue.enqueue(item)
    }

    let result = []
    while (!queue.isEmpty()) {
        let removed = queue.dequeue()
        result.push(removed.value)
    }

    return result
}

class PriorityQueue {
    constructor(capacity, largerThan) {
        this.capacity = capacity
        this.array = []
        this.largerThan = largerThan
    }

    enqueue(item) {
        if (this.array.length === 0) {
            this.array.push(item)
        } else {
            let index = this.array.length - 1
            while (index >= 0) {
                if (this.largerThan(this.array[index], item)) {
                    this.array[index + 1] = this.array[index]
                } else {
                    break
                }
                index--
            }

            this.array[index + 1] = item
        }

        if (this.array.length > this.capacity) {
            this.array.pop()
        }
    }

    isEmpty() {
        return this.array.length === 0
    }

    dequeue() {
        let item = this.array.pop()
        return item
    }
}
