function largestSubarraySum(array) {

  if (array[0] < 1) {
    for (let i = 1; i < array.length; i++) {
      if (array[i] > array[0]) {
        return largestSubarraySum(array.slice(i))
      }
    }

    return array[0]
  }

  let largestSum = array[0]
  let sum = array[0]

  for (let i = 1; i < array.length; i++) {
    sum += array[i]
    if (sum > largestSum) {
      largestSum = sum
    } else if (sum < 1) {
      let newSum = largestSubarraySum(array.slice(i+1))
      if (newSum > largestSum) {
        return newSum
      } else {
        return largestSum
      }
    }
  }
  return largestSum
}
