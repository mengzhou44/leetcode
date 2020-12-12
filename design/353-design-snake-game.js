class SnakeGame {
	constructor(height, width, food) {
		this.height = height
		this.width = width
		this.food = food
		this.score = 0
		this.snake = [[0, 0]]
	}

	move(direction) {
     
		let [m,n] = this.snake[0]
		switch (direction) {
			case 'R':
				n++
				break
			case 'L':
		 	 	n--
				break
			case 'U':
				m--
				break
			case 'D':
			    m++
				break
        }
        
        if (m<0 || m >= this.height || n<0 || n>= this.width)  return  -1 
        
        if (this.food.length >0 && this.food[0][0] === m && this.food[0][1] === n) {
             this.score++
             this.food.shift()
             this.snake.unshift([m,n])
        } else {
             this.snake.pop()
             for(let [x0, y0] of this.snake) {
                 if ( m === x0  && n === y0) {
                     return -1 
                 }
             }
             this.snake.unshift([m,n])
        }

        return this.score
	}
}

let snake = new SnakeGame(2,3,[[1,2], [0,1]])

console.log(snake.move('R'))
console.log(snake.move('D'))
console.log(snake.move('R'))
console.log(snake.move('U'))
console.log(snake.move('L'))
console.log(snake.move('U'))
