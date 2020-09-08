//give an array of integers, and an interget K, 
// find total number of continuous sub arrays that equals to k

function subarraySum(array, k){
      
    let cache = []
    let sum = 0 
    for(let num of array) {
       sum+=num
       cache.push(sum)
    }
    let count = 0 
    for(let i=0; i<array.length; i++) {
        for(let j=i+1;j<array.length; j++) {
            let sum = 0 
            if (i >0) {
                sum = cache[j]-cache[i-1]
            } else {
                sum = cache[j]
            }
  
            if (sum ===k) {
                count++
            }
        }
    }
    return count 
} 

console.log(subarraySum([1,1,1], 2))