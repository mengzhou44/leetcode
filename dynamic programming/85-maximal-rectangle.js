/**
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalRectangle(matrix) {
    if (matrix === null || matrix.length === 0)  return 0 
    let grid = buildGrid(matrix)
   
    let max = 0 
    for(let i=0; i<grid.length; i++) {
        max= Math.max(max, calcRec(grid,i))
    }

    return max 
}

function calcRec(grid, rowIndex) {
     let stack = new Stack()
     stack.push(-1)
     let array = grid[rowIndex]
     let max = 0 
     for(let i=0; i<array.length; i++) {
          while(stack.peek()!==-1 &&  array[i]< array[stack.peek()]) {
               max = Math.max(max, array[stack.pop()] * (i-stack.peek()-1))
          }
          stack.push(i)
      }
     

      while(stack.peek()!==-1) {
         max = Math.max(max, array[stack.pop()] * (array.length-         stack.peek()-1))         
      }
        console.log(max)
      return max
    
}

class Stack {
    constructor() {
        this.array=[]
    }
    
    peek() {
         return this.array[this.array.length-1]
    }
    
    push(val) {
        this.array.push(val)
    }
    
    pop() {
        return this.array.pop()
    }
}

function buildGrid(matrix) {
    let m = matrix.length 
    let n = matrix[0].length 
    let grid = new Array(m)
    for (let row = 0; row<grid.length; row++) {
         grid[row]= new Array(n).fill(0) 
    }
    
    for(let i=0; i<n; i++) {
        grid[0][i]= parseInt(matrix[0][i])
    }
    
    for(let row=1; row<m; row++) {
        for(let j=0; j<n; j++) {
             if (matrix[row][j] ==='1') {
                  grid[row][j] = 1+ grid[row-1][j]
             }
        }
    }
    return grid
}