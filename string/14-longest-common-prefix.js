function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  if (strs.length === 1) return strs[0];

  let first = strs.shift();

  let second = longestCommonPrefix(strs);

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return first.substring(0, i);
    }
  }

  return first.substring(0, size);
}

function longestCommonPrefix(strs) {
  if  (strs.length === 0)  return ''
  if  (strs.length === 1)  return strs[0]
 
  let  first =strs.shift()
  
  let temp = longestCommonPrefix(strs)
  
  let length = Math.min(first.length, temp.length)
  let i
  for(i=0; i<length; i++) {
       if (first[i] !== temp[i]) {
           break
       }
  }
 
  return first.substring(0,i)
 
}

******************************************

function longestCommonPrefix(strs) {
  if (strs.length ===0 )  return  ''
 
  if (strs.length === 1)   return strs[0]
  let result =[]
  for(let  index=0 ;index< strs[0].length; index++) {
       if (isCommon(strs, index)) {
           result.push(strs[0][index])
       } else {
           break
       }
  }
  return result.join('')
}

function isCommon(strs, index) {
  let letter = strs[0][index]
  for (let str of strs) {
      if (str[index] !== letter) {
          return false 
      }
  }
 
  return true 
}
