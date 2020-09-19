/**
 * @param {string} input
 * @return {number[]}
 */
let cache = new Map()

function diffWaysToCompute(input) {
    if (cache.has(input)) return cache.get(input)
    
    let result=[] 
    for(let i=0; i<input.length; i++) {
           let op = input[i]
           if (op==='+' ||  
               op==='-' ||
               op==='*') {
              
                const  left = input.substring(0,i)
                const  right = input.substring(i+1)
               
                const l = diffWaysToCompute(left)
                const r = diffWaysToCompute(right)
               
                for(let a of l) {
                    for(let b of r) {
                        result.push(compute(a,b,op))       
                    }
                }
           }
    }
    if (result.length === 0) {
         result.push(parseInt(input))
    }
    cache.set(input, result)
    return result 
}


function compute(a,b, op) {
     switch(op) {
         case '+':
             return a+b 
         case '-':
             return a-b
         default: 
             return a*b
     }
}