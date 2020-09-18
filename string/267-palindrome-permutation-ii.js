// Given a string s, return all the palindromic permutations (without duplicates) of it. Return an empty list if no palindromic permutation could be form.

// Example 1:

// Input: "aabb"
// Output: ["abba", "baab"]
// Example 2:

// Input: "abc"
// Output: []

// function generatePalindrome(s) {
//   let array = new Array(256).fill(0)
//   for (let c of s) {
//     array[c.charCodeAt(0)]++
//   }
//   let center = ''
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 1) {
//       if (center === '') {
//         let ch = String.fromCharCode(i)
//         center = createString(ch, array[i])
//         array[i] = 0
//       } else {
//         return []
//       }
//     }
//   }

//   let result = []
//   helper(result, array, center)
//   return result

//   function helper(result, array, temp) {
//     if (temp.length === s.length) {
//       result.push(temp)
//       return
//     }
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] > 0) {
//         array[i] = array[i] - 2
//         let ch = String.fromCharCode(i)
//         helper(result, array, ch+temp+ch)
//         array[i] = array[i] + 2
//       }
//     }
//   }
// }

// function createString(ch, count) {
//   return new Array(count).fill(ch).join('')
// }

// console.log(generatePalindrome('aabbccc'))

// Given a string s, return all the palindromic permutations (without duplicates) of it. Return an empty list if no palindromic permutation could be form.

// Example 1:

// Input: "aabb"
// Output: ["abba", "baab"]
// Example 2:

// Input: "abc"
// Output: []

function generatePalindrome(s) {
  let array = new Array(256).fill(0)
  for (let c of s) {
    array[c.charCodeAt(0)]++
  }
  let center = ''
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      if (center === '') {
        let ch = String.fromCharCode(i)
        center = createString(ch, array[i])
        array[i] = 0
      } else {
        return []
      }
    }
  }

  let result = []
  helper(array, center)
  return result

  function helper(array, temp) {
    if (temp.length === s.length) {
      result.push(temp)
      return
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        array[i] = array[i] - 2
        let ch = String.fromCharCode(i)
        helper(array, ch + temp + ch)
        array[i] = array[i] + 2
      }
    }
  }
}

function createString(ch, count) {
  return new Array(count).fill(ch).join('')
}

console.log(generatePalindrome('aabbccc'))
