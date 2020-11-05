function getMoneyAmount(n) {
    let memo = new Array(n+1)
    for(let i=0; i<n+1; i++) {
        memo[i] = new Array(n+1).fill(0) 
    }
     
    return helper(1, n, memo) 
     
    function  helper(start, end) {
         if (start>= end)  return 0
         if (memo[start][end] > 0)  return memo[start][end]
         
         let res= Number.MAX_SAFE_INTEGER
         
         for(let k = start; k<=end; k++) {
             
              let temp =k + Math.max(helper(start, k-1, memo), helper(k+1, end, memo))
              res = Math.min(res, temp)                      
         }
        
         memo[start][end] = res
        
         return res 
 }
 
}