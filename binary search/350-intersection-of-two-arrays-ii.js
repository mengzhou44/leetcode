/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
    let map = new Map()
    for(let num of nums1) {
         if (map.has(num)) {
            
             map.set(num, map.get(num)+1)
         } else {
             map.set(num, 1)  
         }
    }
    let result =[] 
    for(let num of nums2) {
         if (map.has(num)) {
            result.push(num)
            
             if (map.get(num) > 1) {
                 map.set(num, map.get(num)-1)
             } else {
                  map.delete(num)
             }
         }  
    }
   
  
    return result 
}