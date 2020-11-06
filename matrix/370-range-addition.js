function getModifiedArray(length, updates){
     let array = new Array(length).fill(0)
 
     for (let [start, end, inc ] of updates) {
          for(let i=start;  i<=end; i++) {
               array[i]+=inc
          }
     }
     return array 
}

const array = getModifiedArray(5, [[1,3,2],[2,4,3],[0,2,-2]])
console.log(array)