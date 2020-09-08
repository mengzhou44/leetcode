function lengthOfLastWord(s) {
  if (s === "") return 0;

  let temp = s.trim().split(" ");
  return temp[temp.length - 1].length;
}
