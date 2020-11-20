/**
 * @param {string[]} tokens
 * @return {number}
 */

function evalRPN(tokens) {
	let stack = []
	let count = 0
	let operators = '+-*/'.split('')
	while (tokens.length > 0) {
		let temp = tokens.shift()
		if (!operators.includes(temp)) {
			stack.push(parseInt(temp))
		} else {
			let num2 = stack.pop()
			let num1 = stack.pop()
			let result = calculate(num1, num2, temp)

			stack.push(result)
		}
	}
	return stack.pop()
}

function calculate(num1, num2, op) {
	switch (op) {
		case '+':
			return num1 + num2
		case '-':
			return num1 - num2
		case '*':
			return num1 * num2
		default:
			return Math.trunc(num1 / num2)
	}
}
