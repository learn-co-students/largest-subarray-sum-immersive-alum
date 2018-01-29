function largestSubarraySum(array) {
  let sums = {}
  for (let i=0; i<array.length-1; i++) {
    if (array[i] > 0) {
      sums[i] ={}
      for (let j=i+1; j<array.length; j++) {
        sums[i][j] = 0
        for (let x=i; x<=j; x++) {
          sums[i][j] += array[x]
        }
      }
    }
  }

  let sumsToArr = []
  for (let key in sums) {
    for (let key2 in sums[key])
       sumsToArr.push(sums[key][key2])
  }
  return sumsToArr.reduce((acc, cur) => Math.max(acc, cur))
}
