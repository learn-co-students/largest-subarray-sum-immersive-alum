// var array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4];


function largestSubarraySum(array) {
  var max = array[0], current = array[0];

    for (var i = 1; i < array.length; i++) {
      current = current + array[i];
      if(current < 0){
        current = 0
      }
      if (max < current){
        max = current
      }
    }
  return max;
}
