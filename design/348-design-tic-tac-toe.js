class TicTacToe {
     
    constructor(n) {
       this.rows= new Array(n).fill(0)
       this.cols= new Array(n).fill(0)
       this.diagonal1 = 0 
       this.diagonal2= 0 
    }


     move(i,j, player) {
         let change 
         if (player === 1) {
             change = 1 
         } else {
             change = -1 
         }
         this.rows[i] += change
         this.cols[j] += change 
         let n = this.rows.length 

         if  (i === j) {
            this.diagonal1 += change
         } else if (i+j === n-1) {
            this.diagonal1 += change
         }
         if (player === 1) {
            if (this.rows[i] === n || this.cols[j] === n || this.diagonal1 === n || this.diagonal2 === n) {
                return 1 
            }  
         }

         if (player === 2) {
            if (this.rows[i] === -n || this.cols[j] === -n || this.diagonal1 === -n || this.diagonal2 === -n) {
                return 2 
            }
            
         }
       
         return 0 
         
     }
}

let game = new TicTacToe(3)
console.log(game.move(0,0,1))
console.log(game.move(0,2,2))
console.log(game.move(2,2,1))
console.log(game.move(1,1,2))
console.log(game.move(2,0,1))
console.log(game.move(1,0,2))
console.log(game.move(2,1,1))

