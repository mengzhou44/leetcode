function strobogrammaticInRange(low, high) {
  let result = []
  for (let i = low.length; i <= high.length; i++) {
    for(let item of helper(i)) {
       result.push(item)
    }
  }
 
  let lowValue = parseInt(low)
  let highValue = parseInt(high)

  let filtered = result.filter((item) => item >= lowValue && item <= highValue)
  return filtered

  function helper(n) {
    if (n === 0) return []
    if (n === 1)  return [0,1,8]
    if (n === 2)  return [11,69,88,96]
    let result =[]  
    let previous = helper(n - 2)
    for (let item of previous) {
        result.push(parseInt(`1${item}1`))
        result.push(parseInt(`8${item}8`))
        result.push(parseInt(`6${item}9`))
        result.push(parseInt(`9${item}6`))
    }
    return result 
  }
}

console.log(strobogrammaticInRange('50', '100'))

console.log(strobogrammaticInRange('70', '500'))
