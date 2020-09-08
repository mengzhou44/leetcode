/**
 * @param {number} num
 * @return {string}
 */
function numberToWords(num) {
    
  if (num === 0) return 'Zero'

  let temp = num.toString()
  let current= 0
  let result = []
  while(temp.length>0) {
       let val = getLastThreeDigits(temp)
       current++
       let words = createWords(val)
       if (words.length>0) {
            result.unshift(words)
       }
     
      temp = removeLastThreeDigits(temp)
  }

  return result.join(' ').trim()
   
  function getLastThreeDigits(temp) {
       if (temp.length<=3) {
           return parseInt(temp)
       }
       return  parseInt(temp.substring(temp.length-3))
  }
   
  function  removeLastThreeDigits(temp) {
       if (temp.length<=3)  return ''
       return temp.substring(0, temp.length-3)
  }


  function createWords(val)  {
           let result=[]
           
           let temp=  Math.floor(val /100)
           if (temp>0) {
               result.push(createHundreds(temp))
               val= val- Math.floor(val/100) *100
           }
          
           temp= Math.floor(val/10)
           if (temp>0) {
               if (temp >1) {
                   result.push(createTens(temp))
                   val= val- Math.floor(val/10)*10             
                   if (val >0) {
                    result.push(createInt(val))
                  }
               } else {
                   result.push(createTeens(val))
               }
           }
           else {
               if (val >0) {
                    result.push(createInt(val))
               }
               
           }
           
          if (result.length> 0) {
                if (current ===2) {
              result.push('Thousand')
              } else if (current === 3) {
                 result.push('Million')
              } else if (current === 4) {
                 result.push('Billion')
              }

              return result.join(' ')
          }
      
          return ''
  }

  function createHundreds(n) {
       
       switch(n) {
           case 1:
               return 'One Hundred'
           case 2:
               return 'Two Hundred'
           case 3:
               return  'Three Hundred'
           case 4:
               return 'Four Hundred'
           case 5: 
               return 'Five Hundred'
           case 6:
               return 'Six Hundred'
           case 7: 
               return  'Seven Hundred'
           case 8: 
               return  'Eight Hundred'
           default:
               return 'Nine Hundred' 
       }
  }

  function createTens(n) {
      switch(n) {
           case 2:
               return 'Twenty'
           case 3:
               return  'Thirty'
           case 4:
               return 'Forty'
           case 5: 
               return 'Fifty'
           case 6:
               return 'Sixty'
           case 7: 
               return  'Seventy'
           case 8: 
               return  'Eighty'
           default:
               return 'Ninety' 
       } 
  }


  function createTeens(n) {
      switch(n) {
            case 10:
               return 'Ten'
           case 11:
               return 'Eleven'
           case 12:
               return  'Twelve'
           case 13:
               return 'Thirteen'
           case 14: 
               return 'Fourteen'
           case 15:
               return 'Fifteen'
           case 16: 
               return 'Sixteen'
           case 17: 
               return 'Seventeen'
           case 18: 
               return 'Eighteen'
           default:
               return 'Nineteen' 
       } 
  }

 function createInt(n) {
   
      switch(n) {
           case 1:
               return 'One'
           case 2:
               return  'Two'
           case 3:
               return 'Three'
           case 4: 
               return 'Four'
           case 5:
               return 'Five'
           case 6: 
               return 'Six'
           case 7: 
               return  'Seven'
           case 8: 
               return  'Eight'
           default:
               return 'Nine' 
       } 
  }
}