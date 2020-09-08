function addDigits(num) {
    while (num >= 10) {
        num = helper(num)
    }
    return num

    function helper(num) {
        let sum = 0
        while (num > 0) {
            sum += num % 10
            num = Math.floor(num / 10)
        }
        return sum
    }
}
