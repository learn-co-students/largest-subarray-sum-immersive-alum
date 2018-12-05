function largestSubarraySum(array) {
  let largest = 0
  let tempLargest = 0

  array.forEach(num => {
    if (tempLargest + num > 0) {
      tempLargest += num
    } else {
      largest = tempLargest
      tempLargest = 0
    }
  })
  return largest
}
