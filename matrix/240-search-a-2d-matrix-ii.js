function  searchMatrix(matrix, target) {
      
    if (matrix === null || matrix.length ===0) return false 
   
    let m = matrix.length 
    let n = matrix[0].length 
    
    let curRow= 0
    let curCol= n-1 
    
     while(curRow<m && curCol>=0) {
          if (matrix[curRow][curCol] ===target)  {
               return true
          }else if (matrix[curRow][curCol]>target)  {
               curCol--
          } else {
              curRow++
          }
    }
    return false 
}