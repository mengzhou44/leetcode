function containsNearbyAlmostDuplicate(nums, k, t) {
    for (let i = 0; i < nums.length; i++) {
        if (contains(i)) {
            return true
        }
    }

    return false

    function contains(index) {
        let left = Math.max(0, index - k)
        let right = Math.min(nums.length - 1, index + k)
        for (let i = left; i <= right; i++) {
            if (i === index) continue
            if (Math.abs(nums[i] - nums[index]) <= t) {
                return true
            }
        }
        return false
    }
}


**********
TreeSet  
*********
function containsNearbyAlmostDuplicate(nums, k, t) {
  let treeSet = new TreeSet()
  for(let i=0; i<nums.length; i++) {
       let ceiling = treeSet.ceiling(nums[i])
       if (ceiling!== null && ceiling - nums[i]<=t) return true 
      
       let floor = treeSet.floor(nums[i])
       if (floor!== null && nums[i]-floor<=t) return true 
       
       treeSet.add(nums[i])
       if (treeSet.size()>k) {
           treeSet.remove(nums[i-k])
       }
  }
  return false 
  
}


class TreeSet {
   constructor() {
       this.array=[]
   }
  
   floor(num) {
      let filtered = this.array
                    .filter(item=> item<=num)
          
      if (filtered.length === 0)  return null 
      return filtered.pop()
   }
  
   ceiling(num) {
      let filtered = this.array
                     .filter(item=> item>=num) 
      if (filtered.length === 0)  return null 
      return filtered.shift()
   }
  
   add(item) {
       this.array.push(item)
       this.array.sort((a,b)=>a-b)
   }
  
  size() {
       return this.array.length;
  }
  
  remove(item) {
      let temp=[]
      let found = false
      for(let i of this.array) {
           if (i !== item || found === true) {
               temp.push(i) 
           }else if (found === false) {
                found = true
           }
      }
      this.array= temp
  }
}

*********
Bucket
*****

function containsNearbyAlmostDuplicate(nums, k, t) {
  let buckets = new Map()
  let bucketNumber = 0
  buckets.set(bucketNumber, [])
  for (let i=0; i<nums.length; i++) {
       if (Math.floor(i/k) >bucketNumber) {
             bucketNumber++
             buckets.set(bucketNumber, [])
       }   
       buckets.get(bucketNumber).push( {
                value: nums[i],
                index: i
       })
  }

 for(let i=0; i<=bucketNumber; i++) {
     let array = buckets.get(i)
     let neighbors= [...array]
     if (i>0) {
         neighbors = [...buckets.get(i-1), ...neighbors]
     } 
     if (i<bucketNumber) {
           neighbors = [...neighbors, ...buckets.get(i+1)]
     }
     
     for(let item of array){
         let filtered = neighbors.filter(i=> isMatch(i, item))
   
         if (filtered.length>0)  return true 
     }
 }

 return false 

 function isMatch(item1, item2) {
     if (item1.index === item2.index)  return false 
     
     return Math.abs(item1.index- item2.index) <=k && 
            Math.abs(item1.value- item2.value) <=t 
 }
}



function containsNearbyAlmostDuplicate(nums, k, t) {
  if (k ===0)  return false 
  for(let i=0; i<nums.length; i++) {
       if (isMatch(i)) return true 
  }
  return false 
  
  function isMatch(i){
       let currentIndex =i+1 
       while(currentIndex<nums.length && currentIndex-i<=k) {
           if (Math.abs(nums[i]- nums[currentIndex])<=t) {
               return true
           }
           currentIndex++
       }
       return false 
  }
}

