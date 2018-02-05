function largestSubarraySum(array) {
  // initailly set val to first element;
  let max = array[0];
  let currentMax = array[0];

  // start iterating from array[1]
  for (var i = 1; i < array.length; i++) {
    // add contiguous elemnts
    currentMax += array[i];

    // if addition results in lower previous value, start the process over from current element
    if (currentMax < array[i]) {
      currentMax = array[i];
    }

    // if contiguous addition results in higher val, reset final result to currentMax
    if (max < currentMax) {
      max = currentMax
    }
  }

  return max;
}
