function canCompleteCircuit(gas, cost) {
    for (let index = 0; index < gas.length; index++) {
        if (canComplete(index) === true) {
            return index
        }
    }
    return -1

    function canComplete(startIndex) {
        let balance = 0
        for (let i = startIndex; i < startIndex + gas.length; i++) {
            let index = i % gas.length
            balance += gas[index] - cost[index]
            if (balance < 0) return false
        }
        return true
    }
}
