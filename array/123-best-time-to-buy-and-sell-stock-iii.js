/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let firstBuy = Number.MIN_SAFE_INTEGER
    let secondBuy = Number.MIN_SAFE_INTEGER
    let firstSell = 0
    let secondSell = 0

    for (let i = 0; i < prices.length; i++) {
        firstBuy = Math.max(firstBuy, -prices[i])
        firstSell = Math.max(firstSell, firstBuy + prices[i])
        secondBuy = Math.max(secondBuy, firstSell - prices[i])
        secondSell = Math.max(secondSell, secondBuy + prices[i])
    }

    return secondSell
}
