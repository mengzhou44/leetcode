// Numbers can be regarded as product of its factors. For example,

// 8 = 2 x 2 x 2;
//   = 2 x 4.
// Write a function that takes an integer n and return all possible combinations of its factors.


function getFactors(n) {
    if (n === 1)  return [] 
    let result= [] 
    dfs(2)
    return result 

    function dfs(num, product=1,  cur=[]) {
        if (product === n) {
             result.push(cur)
             return 
        }
        
        if (product >n)  return 

        for (let i=num; i<n; i++) {
             if (n %i !==0) continue 
             cur.push(i)
             dfs(i,product*i, [...cur])
             cur.pop()
        }
    }
}


console.log(getFactors(12))

console.log(getFactors(37))