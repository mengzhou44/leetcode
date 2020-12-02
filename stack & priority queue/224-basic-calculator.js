/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
	let stack = []

	for (let i = 0; i < s.length; i++) {
		if (s[i] === ' ') continue
		else if (s[i] === '(' || s[i] === '+' || s[i] === '-') {
			stack.push(s[i])
		} else if (isDigit(s[i])) {
			let temp = ''
			while (isDigit(s[i])) {
				temp += s[i]
				i++
			}
			stack.push(parseInt(temp))
			i--
		} else {
			stack = updateStack(stack)
		}
    }
    
	if (stack.length > 1) {
		stack = updateStack(stack)
	}

	return stack[0]
}

function updateStack(stack) {
	let numbers = []
	let operators = []
	while (stack.length !== 0 && stack[stack.length - 1] !== '(') {
		let temp = stack.pop()
		if (temp === '+' || temp === '-') {
			operators.unshift(temp)
		} else {
			numbers.unshift(temp)
		}
	}
	if (stack.length > 0) {
		stack.pop()
	}

	let sum = numbers.shift()
	for (let op of operators) {
		if (op === '+') {
			sum += numbers.shift()
		} else {
			sum -= numbers.shift()
		}
	}
	stack.push(sum)
	return stack
}

function isDigit(letter) {
	return '0123456789'.includes(letter)
}
