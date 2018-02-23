function largestSubarraySum(array) {
  let result = 0;
  let sum = 0;
  for (let i in array) {
    if (sum + array[i] >= 0) {
      sum += array[i];
    } else {
      if (sum > result) {
        result = sum;
      }
      sum = array[i];
    }
  }
  return result;
}
