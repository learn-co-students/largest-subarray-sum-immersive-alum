function largestSubarraySum(array) {
  let sum = 0
  let current = 0
  array.forEach(x => {
    current += x
    current < 0 ? current = 0 : null
    sum < current ? sum = current: null
  })
  return sum
}
