function canPick(array){
     
    if (array.length<5)  return false 
    let prefixSum = [0] 
    for (let i=1; i<array.length; i++) {
        prefixSum[i] = prefixSum[i-1]+array[i-1]
    }
    let total = array.reduce((sum,item)=> sum+item)
    
    for(let i=0; i<array.length; i++) {
        for(let j=i+1; j<array.length; j++) {
             if (helper(i,j) ) {
                 return true 
             }
        }
    } 
    return false 
  
    function helper(i, j) {
         if (i===2 && j === 5) {
             console.log("step")
         }
         let val1= prefixSum[i]
         let val2= prefixSum[j]- prefixSum[i] -array[i]  
         let val3 = total- prefixSum[j] - array[j]   
         
         if (i===2 && j === 5) {
            console.log(val1, val2, val3)
        }

         if (val1 ===val2 && val2 ===val3) {
            return true 
         }
 
         return false 
   }
}

console.log(canPick([2, 4, 5, 3, 3, 9, 2, 2, 2]))