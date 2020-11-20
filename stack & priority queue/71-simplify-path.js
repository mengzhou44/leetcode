/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
	let array = path.split('/')
	let stack = []
	while (array.length > 0) {
		let item = array.shift()
		if (item === '') continue
		if (item === '.') continue
		if (item === '..') {
			stack.pop()
		} else {
			stack.push(item)
		}
	}

	return '/' + stack.join('/')
}
