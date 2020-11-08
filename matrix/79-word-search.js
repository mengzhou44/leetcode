function exist(board, word) {
    
    if (word === null || word === '') return true 
    if (board === null || board.length === 0) return false 
    
    let m = board.length
    let n = board[0].length 
    
    for(let row=0; row<m; row++) {
        for (let col=0; col<n;col++) {
             if (dfs(row,col,board)) {
                 return true 
             }
        }
    }
    
    return false 
    
    function dfs(row,col, board, index=0) {
          if (index===word.length)  return true 
        
          if (row<0 || col<0 || row>=m || col>=n) return false 
        
          if (word[index]!== board[row][col]) 
              return false 
                
           let letter= board[row][col]
           board[row][col] = ''
           
           if ( dfs(row+1, col, board, index+1)  ||
                dfs(row-1, col, board, index+1)  ||
                dfs(row, col+1, board, index+1)  ||
                dfs(row, col-1, board, index+1) ) {
                return true 
           }
    
           board[row][col] = letter
        
           return false        
    }
}