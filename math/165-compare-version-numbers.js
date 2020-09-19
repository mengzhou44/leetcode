function compareVersion(version1, version2) {
  let array1 = version1.split('.')
  let array2 = version2.split('.')

  let maxSize = Math.max(array1.length, array2.length)

  for (let i = 0; i < maxSize; i++) {
    let value1 = getValueAt(array1, i)
    let value2 = getValueAt(array2, i)

    if (value1 > value2) return 1
    if (value1 < value2) return -1
  }

  return 0
}

function getValueAt(array, index) {
  if (index >= 0 && index < array.length) {
    return parseInt(array[index])
  }
  return 0
}
