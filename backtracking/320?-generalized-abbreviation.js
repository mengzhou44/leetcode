// Write a function to generate the generalized abbreviations of a word.

// Example: Given word = "word", return the following list (order does not matter):

// ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", >"1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]


function generateAbbreviations(word) {

     if (word.length === 1)  return [ word[0], "1"]

     let result=[]
     dfs(word, cur)
}