function addBinary(a, b) {
  let array1= a.split('')
  let array2= b.split('')
  
  let result = []
  let carry = 0 
  while(array1.length>0 || array2.length>0) {
       let  sum = carry
       if (array1.length>0) {
           sum += parseInt(array1.pop())
       }
       if (array2.length>0) {
           sum += parseInt(array2.pop())
       }
      
       result.unshift(sum%2)
       carry = Math.floor(sum/2)
  }
  if (carry === 1) {
      result.unshift(1)
  }
  
  return result.join('')
  
}
