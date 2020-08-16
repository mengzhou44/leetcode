class DistanceFinder {
     constructor(words) {
        this.map=new Map() 
        for(let i=0; i<words.length; i++) {
           if (!this.map.has(words[i])) {
               this.map.set(words[i],[i])
           }else {
              let temp = this.map.get(words[i])
              temp.push(i)
           }
        } 
     }

     shortest(word1, word2) {
        let index1List = this.map.get(word1)
        let index2List = this.map.get(word2)
      
        let result= Number.MAX_SAFE_INTEGER
        let i=0 
        let j=0
        while (i<index1List.length && j<index2List.length) {
            
              let pos1= index1List[i]
              let pos2= index2List[j]
              if (pos1<pos2)  {
                  result = Math.min(result, pos2-pos1)
                  i++
              }else {
                  result = Math.min(result, pos1-pos2)
                  j++
              }
        }
        return result   
     }
} 

let words = ['practice', 'makes', 'coding', 'perfect', 'makes']
let finder = new  DistanceFinder(words)
console.log(finder.shortest('coding', 'makes'))
 