/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
function kSmallestPairs(nums1, nums2, k) {
    if (nums1.length === 0 || nums2.length === 0 || k=== 0 )  return []
    
    let l1= nums1.length
    let l2 = nums2.length 
    k = Math.min(k, l1*l2)
    
    let queue= [{
         sum: nums1[0]+nums2[0],
         index1: 0,
         index2: 0 
    }] 
    let seen= [[0,0]]
    let result =[] 
     while(k>0) {
        const {index1, index2} =  queue.shift()
        result.push([nums1[index1], nums2[index2]])
        
        if (index1+1<l1 &&  isNotSeen(seen, [index1+1, index2])) {
            addToQueue(queue,  {
               sum: nums1[index1+1] +nums2[index2],
               index1: index1+1,
               index2
            })
            seen.push([index1+1, index2])
        }

        if (index2+1< l2 && isNotSeen(seen, [index1, index2+1])) {
            addToQueue(queue,  {
               sum: nums1[index1] +nums2[index2+1],
               index1,
               index2: index2+1
            })    
            seen.push([index1, index2+1])
        }
        
        k--
     }
     
     return result 
}

function addToQueue(queue, {sum, index1, index2}) {
      let i
      for(i=queue.length-1; i>=0; i--) {
           if (queue[i].sum>sum) {
               queue[i+1] =queue[i]
           } else {
               break
           }
      }
      
      queue[i+1] = {sum,  index1, index2}

}

function isNotSeen(seen, [index1,index2]) {
    for(let item of seen) {
         if (item[0] === index1 && item[1] === index2) {
             return false 
         }
    }
    return true 
}


 