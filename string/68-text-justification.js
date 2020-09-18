/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
function fullJustify(words, maxWidth) {
  if (words.length === 0) {
    return []
  }

  let line = [words[0]]

  let result = []
  for (i = 1; i < words.length; i++) {
    let temp = line.join(' ') + ' ' + words[i]
    if (temp.length > maxWidth) {
      result.push(fullyJustify(line))
      line = [words[i]]
    } else {
      line.push(words[i])
    }
  }
  result.push(leftJustify(line))
  return result

  function fullyJustify(line) {
    let result = []
    let slots = line.length - 1
    if (slots === 0) {
      let temp = line[0]

      return temp + createSpace(maxWidth - temp.length)
    }
    let spaceUsed = line.reduce((sum, word) => sum + word.length, 0)
    let temp = (maxWidth - spaceUsed) % slots
    let space = Math.floor((maxWidth - spaceUsed) / slots)

    for (let i = 0; i < line.length - 1; i++) {
      result.push(line[i])
      if (i < temp) {
        result.push(createSpace(space + 1))
      } else {
        result.push(createSpace(space))
      }
    }
    result.push(line[line.length - 1])
    return result.join('')
  }

  function leftJustify(line) {
    let temp = line.join(' ')
    return temp + createSpace(maxWidth - temp.length)
  }

  function createSpace(n) {
    let temp = new Array(n).fill(' ')
    return temp.join('')
  }
}
