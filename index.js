


function largestSubArraySum(array){
  let max = array[0]
  let currentMax = array[0]

  array.forEach(function(value){
    currentMax += value
    if(max < currentMax){
      max = currentMax
    }
    if(currentMax < 0){
      currentMax = 0
    }
  })
  return max
}
