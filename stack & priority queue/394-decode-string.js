/**
 * @param {string} s
 * @return {string}
 */
function decodeString(s) {
	let stack = []
	for (let i = 0; i < s.length; i++) {
		if (isDigit(s[i])) {
			let temp = ''
			while (isDigit(s[i])) {
				temp += s[i]
				i++
			}
			stack.push(parseInt(temp))
			i--
		} else if (s[i] !== ']') {
			stack.push(s[i])
		} else {
			let array = []
			while (stack[stack.length - 1] !== '[') {
				array.unshift(stack.pop())
			}
			stack.pop()
			let times = stack.pop()

			for (let i = 0; i < times; i++) {
				for (let j = 0; j < array.length; j++) {
					stack.push(array[j])
				}
			}
		}
	}

	return stack.join('')
}

function isDigit(letter) {
	return '0123456789'.includes(letter)
}
