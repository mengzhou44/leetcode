/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let m = matrix.length 
    
    let n = matrix[0].length 
    
    let rowsTable = new Array(m).fill(1)
    let colsTable = new Array(n).fill(1)
    
    for(let i=0; i<m; i++) {
         for(let j = 0; j<n; j++) {
              if (matrix[i][j] === 0)  {
                  rowsTable[i] =0
                  colsTable[j]= 0 
              }
         }
    }
   
    for(let i=0; i<m; i++) {
         for(let j = 0; j<n; j++) {
             if (rowsTable[i] === 0 || colsTable[j] === 0) {
                  matrix[i][j] = 0
             }
         }
    }

};