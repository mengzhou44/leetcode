function exist(board, word) {
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
    
    function dfs(row,col, board, current='') {
          if (current === word)  return true 
        
          if (row<0 || col<0 || row>=m || col>=n) return false 
        
          if (board[row][col] === '' ||  
              word.startsWith(current+ board[row][col]) === false) 
              return false 
        
           let letter = board[row][col]
           
           board[row][col] = ''
           
           if ( dfs(row+1, col, board, current+letter)  ||
                dfs(row-1, col, board, current+letter)  ||
                dfs(row, col+1, board, current+letter)  ||
                dfs(row, col-1, board, current+letter) ) {
                return true 
           }
    
           board[row][col] = letter
        
           return false        
    }
}