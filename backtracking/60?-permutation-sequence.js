function getPermutation(n, k) {
    if (n === 0)  return '' 
    let count = 0 
    let result =''
    let visited = new Array(n+1).fill(false)
    dfs(visited)
    
    return result 
    
    function dfs(visited,cur=[]) {
         if (cur.length === n) {
              count++ 
              if (count === k) {
                  result = cur.join('') 
              }
              return 
         }
         
         for(let i=1; i<=n; i++) { 
             if (visited[i]=== true) continue 
             cur.push(i)
             visited[i] = true
             dfs(visited, [...cur])
             visited[i] = false  
             cur.pop()
         }
    }
}