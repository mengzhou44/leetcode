// Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// Example:

 
// matrix = [
//    [ 1,  5,  9],
//    [10, 11, 13],
//    [12, 13, 15]
// ],
// k = 8,
 
// return 13.


// function kthSmallest(matrix,k) {
   
//      let n = matrix.length 

//      let left = matrix[0][0]
//      let right = matrix[n-1][n-1]

//      while(left<right){
//          let mid = left+ Math.floor((right-left)/2)
//          const lessOrEqual = findLessOrEqual(matrix, mid)
//          if (lessOrEqual>=k) {
//              right=mid
//          }else {
//              left=mid+1
//          }
//      } 
//      return left 
// }

// function findLessOrEqual(matrix, num) {
//     let  result = 0 
//     matrix.forEach(row=>  {
//         let count = row.filter(val=> val<=num).length
//         result+=count
//     })
//     return result 
// }



 
class ListNode {
     constructor(val) {
         this.val = val 
         this.next = null
     }
}

function kthSmallest(matrix,k) {
     let n = matrix.length
     let list=[]
     for(let col=0; col<n; col++) {
         let head = new ListNode(matrix[0][col])
         let cur = head 
         for(let row=1; row<n; row++) {
             cur.next = new ListNode(matrix[row][col])
             cur = cur.next 
         }
         list.push(head)
     }
     
     let count = 0
     let result 
     while(count<k){
        result =popSmallest(list)
        count++
     } 
     
     return result 

     function popSmallest() {
       
        let smallest = null 
        for(let node of list) {
            if (node === null) {
                continue
            }
            if (smallest === null) {
                 smallest = node 
            } else {
                smallest = smallest.val <node.val ? smallest : node 
            }
        }
  
         list = list.filter(node=> node!==smallest)
         
         let result= smallest.val 
         smallest = smallest.next 
         
         list.push(smallest)
  
        return result 
   }
 }




 console.log(kthSmallest(
    [
        [ 1,  5,  9],
        [9, 10, 13],
        [12, 14, 102]
],
 8))