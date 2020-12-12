class UniqueWordAbbreviation {
  
     constructor(words) {
         this.map = new Map()
         for(let word of words) {
              let abbreviation= this.abbreviate(word)
              if (!this.map.has(abbreviation)) {
                  this.map.set(abbreviation, word)
              } else {
                  this.map.set(abbreviation, '')
              }
            
         }
     }

     abbreviate(word) {
         if (word.length <=2)  return word
         return word[0] + word.length-2 + word[word.length-1]
     }
      
     isUnique(word) {
        return this.map.get(this.abbreviate(word)) === word  
     }
}


