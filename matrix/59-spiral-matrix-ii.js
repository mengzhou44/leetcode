/**
 * @param {number} n
 * @return {number[][]}
 */
function generateMatrix(n) {
    let  matrix = new Array(n)
    
    for(let i=0; i<n; i++) {
       matrix[i] = new Array(n).fill(0)
    }
    
    let startRow = 0 
    let endRow = n-1
    
    let startCol = 0 
    let endCol= n-1
    let i=0 
    while(startRow<endRow && startCol<endCol) {
        
          let col = startCol
          while(col<=endCol) {
               matrix[startRow][col]= ++i
              col++
          }
          startRow++
          
          let row = startRow 
          while(row<=endRow) {
              matrix[row][endCol] = ++i
              row++
          }
          endCol--
        
          col = endCol
          while(col>=startCol) {
              matrix[endRow][col]= ++i
              col--
          }
          endRow--
    
          row = endRow 
          while(row>=startRow) {
              matrix[row][startCol] = ++i
              row--
          }
          startCol++
    }
    
    if (startRow === endRow && startCol ===endCol) {
        matrix[startRow][startCol] = ++i
    }
    
    return matrix 
    
}