


function largestSubarraySum(array){
  let max = array[0]
  let currentMax = array[0]

  for(let i = 1; i < array.length; i++){
    currentMax += array[i]
    if(max < currentMax){
      max = currentMax
    }
    if(currentMax <= 0){
      currentMax = 0
    }
  }
  return max
}
