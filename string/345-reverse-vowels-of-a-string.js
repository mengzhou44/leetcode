function reverseVowels(s) {
  let array=[]
  for(let i=0; i<s.length; i++) {
       if (containsVowel(s[i])) {
           array.push(s[i])
       }
  }

  let result = []
  for(let i=0; i<s.length; i++) {
      if (containsVowel(s[i])) {
           result.push(array.pop()) 
       } else {
           result.push(s[i])
       }
  }
  return result.join('')
}

function containsVowel(letter) {
   return 'aeiou'.split('').includes(letter.toLowerCase())
}