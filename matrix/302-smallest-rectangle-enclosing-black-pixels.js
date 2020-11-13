// function minArea(grid,x,y) {
//     let m= grid.length 
//     let n = grid[0].length

//     let left =y 
//     let right = y

//     let up=x
//     let down =x

//     dfs(x,y)

//     return  (right-left+1)* (down-up+1)

//     function dfs(x,y) {

//         if (x<0 || x>m-1 || y<0 || y>n-1 || grid[x][y] !== 1 )  return 
//         grid[x][y] = 0
        
//         left = Math.min(left,y)
//         right = Math.max(right, y)

//         up = Math.min(up,x)
//         down = Math.max(down, x)

//         dfs(x+1, y)
//         dfs(x-1, y)
//         dfs(x, y+1)
//         dfs(x, y-1)

//     }

//}


function minArea(grid, x,y) {
    let m = grid.length 
    let n = grid[0].length

    let colsGrid= findColsGrid()

    let up =   findLeftTopBound(0,x, grid)
    let left = findLeftTopBound(0, y, colsGrid)
    let bottom = findRightBottomBound(x, m-1, grid)
    let right = findRightBottomBound(y, n-1,colsGrid)

    return  (bottom-up +1 ) * (right-left+1)
 
    function findColsGrid() {
         let result = [] 
         for(let col=0; col<grid[0].length; col++) {
             let temp =[]
            for(let row=0; row<grid.length;  row++) {
                temp.push(grid[row][col])
            }
            result.push(temp)
         }
         return result 
     }

    function findLeftTopBound(start,end, array) {

        while(start+1<end){
            let mid = start + Math.floor((end-start)/2)
           
            let found = array[mid].filter(num=> num === 1)
            
            if (found.length >0) {
                end = mid 
            }else {
                start =mid+1
            }
       }

       let found = array[start].filter(num=> num === 1)
       if (found.length >0) {
            return start
       }

       return end 

    }


    function findRightBottomBound(start,end, array) {
        while(start+1<end){
             let mid = start + Math.floor((end-start)/2)
             let found = array[mid].filter(num=> num === 1)
             if (found.length >0) {
                 start = mid 
             }else {
                 end =mid-1
             }
        }

        let found = array[end].filter(num=> num === 1)
        if (found.length >0) {
             return end
        }
        return start 
    }

}



console.log(minArea([
    [0,0,1,0],
    [0,1,1,0],
    [0,1,0,0]
  ], 0,2))