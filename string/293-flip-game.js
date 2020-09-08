// You are playing the following Flip Game with your friend: 
// Given a string that contains only these two characters: + and -, 
//you and your friend take turns to flip two consecutive "++" into "--". 
//The game ends when a person can no longer make a move and 
//therefore the other person will be the winner.

//Write a function to compute all possible states of the string after one valid move.

function generateNextPossibleMove(s){
    if (s.length<2)  return 0
    let result =[]
    for(let i=1; i<s.length; i++) {
       if (s[i] === s[i-1]  && s[i] === '+') {
           result.push(createMove(s,i-1))
       }
    }
    
   return result 
}

function createMove(s, start) {
    let temp = []
    for(let i=0; i<s.length; i++) {
        if (i!==start&& i!== start+1){
           temp.push(s[i])
        }else {
          temp.push('-')
        }
    }
    return temp.join('')
}


console.log(generateNextPossibleMove('++++'))