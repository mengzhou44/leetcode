/**
 * @param {character[][]} board
 * @return {boolean}
 */
function  isValidSudoku(board) {
    let m = 9 
    let n = 9 
    
    for(let row of board) {
        let array=[]
        for(let num of row) {
             if (num === ".") continue 
             if (array.find(item=> item === num)!== undefined) {
                 return false 
             }
             array.push(num)
        }
    }
   
    for(let col=0 ; col<n; col++) {
          let array=[]
         for(let row=0; row<m; row++) {
              if (board[row][col] === ".") continue 
             if (array.find(item=> item ===board[row][col]) !== undefined) {
                 return false 
             }
             array.push(board[row][col])
         }
         
    }
       
    for(let row=0; row<m; row=row+3) {
        for(let col=0; col<n; col=col+3) {
               let top = row
               let left =col
               let bottom = top+3
               let right = left+3
               if (!isValid(top, left, right,bottom)) return false 
         }
    }
      
    return true 
    
    function isValid(top,left, right, bottom) {
        let array=[]
        for(let row=top; row<bottom; row++) {
            for(let col=left; col<right; col++) {
                if (board[row][col] === '.') continue
                if (array.find(num=> num ===board[row][col])!== undefined) {
                    return false 
                }
                array.push(board[row][col])
            }
        }
        return true 
    }
    
}

