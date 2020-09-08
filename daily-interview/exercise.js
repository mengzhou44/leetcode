class Node {
   constructor(val) {
       this.val = val 
       this.map = new Map()
       this.isEndOfWord= false 
   }

   addChild(c) {
      this.map.set(c, new Node(c))
   }

   hasChild(c) {
       return this.map.has(c)
   }

   getChild(c) {
      return this.map.get(c)
   }

   getChildren() {
      return this.map.values()
   }
}

class Trie  {
    constructor() {
       this.root= new Node('')
    }
    insert(word) {
       let current = this.root
       for(let c of word) {
            if (!current.hasChild(c)) {
                current.addChild(c)
            }
            current= current.getChild(c)
       }
       current.isEndOfWord = true 
    }

    findWords(prefix){
       let words =[] 
       let current = this.root
       for(let c of prefix) {
            if (!current.hasChild(c)) {
                return []
            }
            current= current.getChild(c)
       }
       if (current.isEndOfWord === true) {
           words.push(prefix)
       }

       for(let child of current.getChildren()) {
          traverse(child)
       }
       return  words

       function traverse(current, path=[]) {
           path.push(current.val)

           if (current.isEndOfWord) {
               words.push(prefix+path.join(''))
           }

           for(let child of current.getChildren()) {
               traverse(child, [...path])
           }
       }
    }
}

function autoComplete(words, prefix) {
     let trie= new Trie()
     for(let word of words) {
          trie.insert(word)
     }
     return trie.findWords(prefix)
}


console.log(autoComplete(['car', 'care', 'careful','cap',  'card', 'dog'], 'car'))


