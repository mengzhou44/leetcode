/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
function  nthSuperUglyNumber(n, primes) {
    if (n=== 1)   return 1
    let next =1 
    let m = primes.length
    let indexes= new Array(m).fill(0)
    let val = new Array(m).fill(1)
    
    let ugly = new Array(n)

    for(let i=0; i<n; i++) {
    
        ugly[i]= next 
       
        next= Number.MAX_SAFE_INTEGER
        
        for(let j=0; j<m; j++) {
             if (val[j] === ugly[i])  {
                  val[j] =  ugly[indexes[j]]* primes[j]  
                  indexes[j] = indexes[j]+1
             }
             next = Math.min(next, val[j])
        }
    }
  
    return ugly[n-1]  
}

