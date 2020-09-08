function insert(intervals, newInterval) {
    let result = []
    for (let [start, end] of intervals) {
        if (newInterval === null || end < newInterval[0]) {
            result.push([start, end])
        } else if (newInterval[1] < start) {
            result.push(newInterval)
            newInterval = null
            result.push([start, end])
        } else {
            newInterval[0] = Math.min(start, newInterval[0])
            newInterval[1] = Math.max(end, newInterval[1])
        }
    }

    if (newInterval !== null) {
        result.push(newInterval)
    }

    return result
}
