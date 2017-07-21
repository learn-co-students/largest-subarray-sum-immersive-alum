let largestSubarraySum = (array) => {
  let currentSum = array[0]
  let bestSum = array[0]

  for (let i = 1; i < array.length; i++){
    currentSum = Math.max(array[i], currentSum + array[i])
    bestSum = Math.max(currentSum, bestSum)
  }
  return bestSum
}
