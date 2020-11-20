/**
 * @param {string} input
 * @return {number}
 */
function lengthLongestPath(input) {
	let array = input.split('\n')
	let result = 0
	for (let i = 0; i < array.length; i++) {
		array[i] = createItemInfo(array[i], i)
		if (array[i].isFile) {
			let path = [array[i].name]
			let level = array[i].level
			dfs(array, i - 1, path, level)
			result = Math.max(result, path.join('/').length)
		}
	}

	return result
}

function createItemInfo(str, index) {
	let temp = str
	let level = 0
	while (temp.startsWith('\t')) {
		level++
		temp = temp.substring(1)
	}
	return {
		index,
		level,
		name: temp,
		isFile: temp.includes('.'),
	}
}

function dfs(array, index, path, level) {
	if (level === 0) {
		return
	}

	if (array[index].isFile === false && array[index].level + 1 === level) {
		path.unshift(array[index].name)
		dfs(array, index - 1, path, level - 1)
	} else {
		dfs(array, index - 1, path, level)
	}
}

**************

/**
 * @param {string} input
 * @return {number}
 */
function lengthLongestPath(input) {
    let array = input.split('\n')
    let result = 0 
    let stack=[]

    for(let i=0; i<array.length; i++) {
        let temp = createItemInfo(array[i])
        
         while(stack.length>0 && stack[stack.length-1].level>=temp.level) {
               stack.pop()  
         }
        
         if (!temp.isFile) {
            stack.push(temp)
        } else {
            if (stack.length ===0) {
                 result = Math.max(result, temp.name.length)
            } else {
                 let path = stack.map(item=> item.name).join('/') +'/'+temp.name
                 result = Math.max(result, path.length)
            }
           
        }
    }

    return result 
}

function createItemInfo(str) {
  let temp = str
  let level=0 
   while(temp.startsWith('\t')) {
       level++
       temp=temp.substring(1)
   }
   return {
       level,
       name: temp,
       isFile: temp.indexOf('.') !==-1
   }  
}
