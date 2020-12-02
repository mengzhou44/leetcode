/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
    let stack =[]
    let sign='+'
    let num=0      
    for(let i=0; i<s.length; i++) {
          if (s[i] ===' ') continue 
               
          if (isDigit(s[i])) {
             while(isDigit(s[i])) {
                  num= num*10 + parseInt(s[i])
                 i++
             }  
             i--
          }
           
          if (i < stack.length -1) continue
          
          if (sign === '+') {
              stack.push(num)
          } else if (sign === '-') {
               stack.push(-num)
          }
          else if (sign === '*') {
               stack.push(stack.pop() * num)
          }
          else if (sign === '/') {
               stack.push(Math.trunc(stack.pop() / num))
          }
          
          sign = s[i] 
          num= 0 
    }
       
    return stack.reduce((sum, item) => sum+item, 0)
}

function isDigit(letter) {
     return  '01234567890'.indexOf(letter) !== -1 
}
