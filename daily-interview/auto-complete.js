class Node {
  constructor(val) {
      this.val = val
      this.children = new Map()
      this.endOfWord = false
  }

  hasChild(c) {
      return this.children.has(c)
  }

  addChild(c) {
      this.children.set(c, new Node(c))
  }

  getChild(c) {
      return this.children.get(c)
  }

  getChildren() {
      return this.children.values()
  }
}

class Trie {
  constructor() {
      this.root = new Node('')
  }

  insert(word) {
      let current = this.root
      for (let c of word) {
          if (!current.hasChild(c)) {
              current.addChild(c)
          }
          current = current.getChild(c)
      }
      current.isEndOfWord = true
  }

  findWords(prefix) {
      let words = []
      let current = this.root
      for (let c of prefix) {
          if (!current.hasChild(c)) {
              return []
          }
          current = current.getChild(c)
      }

      if (current.isEndOfWord) {
          words.push(prefix)
      }

      for (let child of current.getChildren()) {
          traverse(child)
      }

      return words

      function traverse(current, path = []) {
          path.push(current.val)
          if (current.isEndOfWord) {
              words.push(prefix + path.join(''))
          }
          for (let child of current.getChildren()) {
              traverse(child, [...path])
          }
      }
  }
}

function  autoComplete(words, prefix) {

  let trie = new Trie()

  for (let word of words) {
      trie.insert(word)
  }
  return trie.findWords(prefix)

}
 

console.log(autoComplete(['car', 'care', 'careful','cap',  'card', 'dog'], 'car'))
