function groupStrings(strs) {
  let map = new Map()
  for(let str of strs) {
      let key = getHash(str)
      if (map.has(key)) {
         map.get(key).push(str)
      }else {
         map.set(key, [str])
      }
  }

  return Array.from(map.values())

 
  function getHash(str){
      if (str.length ===1)  return  '0'
      let temp=[]
      const TOTAL_LETTERS = 26
      for(let i=1;i<str.length; i++) {
         let distance = (str.charCodeAt(i) - str.charCodeAt(i-1)  + TOTAL_LETTERS) %TOTAL_LETTERS
          temp.push(distance)
      }
      return temp.join('-')
  }

}

console.log(groupStrings(['abc', 'bcd', 'acef', 'xyz', 'az', 'ba', 'a', 'z']))
