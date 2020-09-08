function romanToInt(str) {
    
  let map = new Map()
  map.set('M', 1000)
  map.set('CM', 900)
  map.set('D', 500)
  map.set('CD', 400)
  map.set('C', 100)
  map.set('XC', 90)
  map.set('L', 50)
  map.set('XL', 40)
  map.set('X', 10)
  map.set('IX', 9)
  map.set('V', 5)
  map.set('IV', 4)
  map.set('I', 1)   
  let result =0
  while(str.length>0) {
       if (map.has(str.substring(0,2))) {
             result+=map.get(str.substring(0,2))
             str= str.substring(2)
       } else if (map.has(str.substring(0,1))) {
             result+=map.get(str.substring(0,1))
             str= str.substring(1)
       }
  }
  return result  
}

