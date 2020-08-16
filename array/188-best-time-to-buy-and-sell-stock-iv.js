/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(k, prices) {
    if (k === 0 || prices.length < 2) return 0
    let profit = 0
    if (k > Math.floor(prices.length / 2)) {
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) {
                profit += prices[i] - prices[i - 1]
            }
        }
        return profit
    }

    let buys = new Array(k).fill(Number.MIN_SAFE_INTEGER)
    let sells = new Array(k).fill(0)

    for (let i = 0; i < prices.length; i++) {
        for (let j = 0; j < k; j++) {
            if (j === 0) {
                buys[j] = Math.max(buys[j], -prices[i])
            } else {
                buys[j] = Math.max(buys[j], sells[j - 1] - prices[i])
            }

            sells[j] = Math.max(sells[j], buys[j] + prices[i])
        }
    }

    return sells[k - 1]
}
