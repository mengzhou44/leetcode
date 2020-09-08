function reverseWords(s) {
  let array = s.split(" ");
  let result = [];
  for (let item of array) {
    if (item !== "") {
      result.unshift(item);
    }
  }
  return result.join(" ");
}

function reverseWords(s) {
  let array = s.split(" ").filter((item) => item !== "");
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
    left++;
    right--;
  }

  return array.join(" ");
}
