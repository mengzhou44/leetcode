/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
    
    if (matrix.length === 0)  return  [] 
    
    let result = [] 
    
    let rows = matrix.length
    let columns = matrix[0].length 
    
    let startRow = 0 
    let startCol = 0
    
    let endRow = rows-1
    let endCol = columns -1 
    
    while(startRow< endRow &&  startCol<endCol) {
        let col = startCol
        while(col<=endCol) {
           
            result.push(matrix[startRow][col])
            col++
        }    
        startRow++
        
        let row= startRow
        while(row<=endRow) {
            result.push(matrix[row][endCol])
            row++
        }
        endCol--
        
        col = endCol
        while(col>=startCol) {   
            result.push(matrix[endRow][col])
            col--
        }
        endRow--
        
        row=endRow 
        while(row>=startRow) {
            result.push(matrix[row][startCol])
            row--
        }
        startCol++
    }
    
    if (startRow === endRow) {
         for (let col=startCol; col<=endCol; col++) {
               result.push(matrix[startRow][col])
         }
    }
    
    else if (startCol === endCol) {
         for (let row=startRow; row<=endRow; row++) {
               result.push(matrix[row][startCol])
         }
    }
    
    return result 
}