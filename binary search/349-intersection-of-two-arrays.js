function intersection(nums1, nums2) {
    if (nums1.length === 0  || nums2.length === 0) return [] 
    
     if (nums1.length<nums2.length) {
          return intersection(nums2,nums1)
     }
     
     nums1 = nums1.sort((a,b)=> a-b)
     nums2 = nums2.sort((a,b)=> a-b)
     let set = new Set()
     for (let num of nums2) {
          let found = find(nums1, num) 
          if (found === true ) {
              set.add(num)
          }
     }
     
     return  Array.from(set)
 }
 
 function find(nums, target) {
     let left = 0 
     let right =  nums.length -1 
     
     while(left<= right) {
          let mid = left + Math.floor((right-left)/2)
          if (nums[mid] === target) {
           
              return true
          } else if (nums[mid] > target) {
               right=mid-1
          } else {
               left = mid+1
          }
     }
     
     return false 
 }



 ********

 /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
    let set = new Set()
   
    let i=0 
    let j= 0 
    
    nums1= nums1.sort((a,b)=> a-b)
    nums2= nums2.sort((a,b)=> a-b)
    while(i<nums1.length && j<nums2.length) {
         if (nums1[i] === nums2[j]) {
              set.add(nums1[i])
              i++
              j++
         } else if(nums1[i]<nums2[j]) {
              i++
         } else {
              j++ 
         }
    }
  
   return  Array.from(set)
}