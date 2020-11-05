/**
 * @param {number[][]} matrix
 * @return {number}
 */
function longestIncreasingPath(matrix) {
    
    if (matrix === null || matrix.length === 0)  return 0 
    let dx = [1,-1, 0, 0]
    let dy  =[0, 0, 1, -1]

    let m = matrix.length 
    let n = matrix[0].length 
    let max = 1 
   
    let memo = new Array(m)
    for(let i=0; i<memo.length; i++) {
         memo[i] = new Array(n).fill(0) 
    }
   
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            max = Math.max(max, dfs(i,j,memo))
        }
    }
   
    return  max 
   
    function dfs(i,j, memo) {
       if (memo[i][j]!== 0)  return memo[i][j]
       let len =1 
       for(let k=0; k<4; k++) {
           let x=  i+dx[k]
           let y = j+ dy[k]
           if (x<0 || x>=m || y<0 || y>=n || matrix[x][y]>=matrix[i][j]) continue
           len= Math.max(len, 1+ dfs(x,y,memo))
       }

       memo[i][j] =len
       return len 
   
   }
   
}



