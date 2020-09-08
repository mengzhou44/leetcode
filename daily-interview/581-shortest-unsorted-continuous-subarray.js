function findUnsortedSubarray(nums) {
  if (nums.length < 2) return 0;

  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      min = Math.min(min, nums[i + 1]);
    }
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    if (nums[j] < nums[j - 1]) {
      max = Math.max(max, nums[j - 1]);
    }
  }
  let left,
    right = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > min) {
      left = i;
      break;
    }
  }
  for (let j = nums.length - 1; j >= 0; j--) {
    if (nums[j] < max) {
      right = j;
      break;
    }
  }

  return right - left >= 0 ? right - left + 1 : 0;
}
