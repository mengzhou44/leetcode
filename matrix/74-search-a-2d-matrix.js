/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
 
    if (matrix === null || matrix.length  === 0) return false 
    
    let m = matrix.length 
    let n = matrix[0].length 
    
    let start = 0
    let end= m*n -1
    
    while(start<=end) {
         let mid = start + Math.floor((end-start)/2)
         const {x, y} = getPoint(mid)
         if (matrix[x][y] === target) {
             return true 
         }  else  if (matrix[x][y] > target) {
             end= mid-1
         } else {
             start = mid+1
         }
    } 
    
    return false 
    
    function getPoint(mid) {
         let y = mid % matrix[0].length
         let x = Math.floor(mid / matrix[0].length)
         return {x,y}
    }
}