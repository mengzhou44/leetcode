// Given two sparse matrices A and B, return the result of AB.

// You may assume that A's column number is equal to B's row number.

function  multiply(matrixA, matrixB) {
    let result = new Array(matrixA.length)
    for(let i=0 ; i<result.length; i++) {
         result[i]= new Array(matrixB[0].length)
    }

    let cols= getCols(matrixB)
     for(let i= 0; i< matrixA.length;  i++) {
        for(let j=0; j<cols.length; j++) {
             result[i][j] = helper(matrixA[i], cols[j] )
        }
     }
    return result 
}

function helper(array1, array2) {
     let sum= 0 
     for(let i=0; i<array1.length; i++) {
          sum +=array1[i] *array2[i]
     }
     return sum
}

function getCols(matrix) {
     let cols= [] 
     for (let col =0; col<matrix[0].length; col++) {
          let temp=[]
          for(let row=0; row<matrix.length; row++) {
               temp.push(matrix[row][col])
          }
          cols.push(temp)
     }
      return cols 
}

let A = [
    [ 1, 0, 0],
    [-1, 0, 3]
  ]


let B =   [
    [ 7, 0, 0 ],
    [ 0, 0, 0 ],
    [ 0, 0, 1 ]
  ] 


console.log(multiply(A,B))