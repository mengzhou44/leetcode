// Design an algorithm to encode a list of strings to a string.
//The encoded string is then sent over the network and is decoded back to the original list of strings.

// Machine 1 (sender) has the function:

// string encode(vector<string> strs) {
//   // ... your code
//   return encoded_string;
// }
// Machine 2 (receiver) has the function:

// vector<string> decode(string s) {
//   //... your code
//   return strs;
// }

// So Machine 1 does:

// string encoded_string = encode(strs);
// and Machine 2 does:
// vector<string> strs2 = decode(encoded_string);

// strs2 in Machine 2 should be the same as strs in Machine 1.
// Implement the encode and decode methods.

// Note:

// The string may contain any possible characters out of 256 valid ascii characters. Your algorithm should be generalized enough to work on any possible characters.
// Do not use class member/global/static variables to store states. Your encode and decode algorithms should be stateless.
// Do not rely on any library method such as eval or serialize methods. You should implement your own encode/decode algorithm.

function encode(strs) {
  let encoded = "";
  for (let str of strs) {
    let length = str.length;
    encoded += length + "/" + str;
  }
  return encoded;
}

function decode(encoded) {
  let start = 0;
  while (encoded[start] !== "/") {
    start++;
  }
  let length = parseInt(encoded.substring(0, start));
  let temp = encoded.substring(start + 1, start+1+length);
  if (encoded.length === start+1+length) {
     return [temp]
  } 
  let next = encoded.substring(start + 1 + length);
 
  return [temp, ...decode(next)];
}

console.log(encode(["abc", "def"]))
console.log(decode("3/abc3/def"));
