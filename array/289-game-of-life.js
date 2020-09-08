/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
/* 1 ---> 0    2 
/* 0 ---> 1    3
*/

function gameOfLife(board) {
  if (board === null || board.length === 0) return 
  let rows = board.length
  let cols = board[0].length 
  
  for(let i=0; i<rows; i++) {
      for(let j=0; j<cols; j++) {
           let lives = countLives(i,j)
           if (board[i][j] === 0) {
                if (lives === 3) {
                   board[i][j] =3
                }
           }
           else {
               if (lives<2) {
                   board[i][j] = 2
               }else if (lives>3) {
                   board[i][j] = 2 
               } 
           }
      }
  }
  
  updateBoard()
  
  function countLives(i,j) {
      let count = 0 
      for (let row=i-1; row<=i+1; row++) {
          for (let col=j-1; col<=j+1; col++) {
                if  (row=== i  && col === j) {
                    continue
                }
               
                if (row<0 || row>=board.length) continue
                if (col<0 || col>=board[0].length) continue
              
                if  (board[row][col]===1 || 
                     board[row][col] === 2) {
                    count++
                }
          }    
      }
          
      return count 
  
  }
  
  function updateBoard() {
      for(let i=0; i<rows; i++) {
          for(let j=0; j<cols; j++) {
             if (board[i][j] === 2) {
                 board[i][j] = 0 
             }
             if (board[i][j] === 3) {
                 board[i][j] = 1
             }
        }
      }
      
  }
  
}