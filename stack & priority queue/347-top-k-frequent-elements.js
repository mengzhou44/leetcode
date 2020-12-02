function topKFrequent(nums, k) {
    let counts = new Map()
    let maxCounts = 0 
    for(let num of nums) {
        if (!counts.has(num)) {
            counts.set(num,0)
        }
        counts.set(num, counts.get(num)+1)
        maxCounts= Math.max(maxCounts,counts.get(num))
    }
    
    let buckets  = new Array(nums.length+1).fill(null)
    for(let key of counts.keys()) {
        if ( buckets[counts.get(key)] === null) {
             buckets[counts.get(key)]=[]
        }
        buckets[counts.get(key)].push(key)
    }
    let res=[]
    for(let i= maxCounts; i>=0; i--) {
          if ( buckets[i] === null) continue
          res= res.concat(buckets[i])
          
          if (res.length === k)  return res 
    }
  
}