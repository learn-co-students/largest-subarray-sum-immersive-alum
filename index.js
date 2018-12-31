function sum(array){
  let sum = 0;
  for(let number of array){
    sum += number;
  }
  return sum;
}

function createSubarray(start, length, array){
  let i = start;
  let subArray = [];
  while(subArray.length < length){
    subArray = [...subArray, array[i]];
    ++i;
  }
  return subArray;
}

function largestSubarraySum(array){
  let highestValue = 0;
  let total;
  let sequence = [];
  let subArray;

  let counter;
  let length = 1;
  while(length < array.length){
    counter = 0;
    while(counter < array.length - (length - 1)){
      subArray = createSubarray(counter, length, array);
      total = sum(subArray);
      if(total > highestValue){
        highestValue = total;
      }
      ++counter;
    }
    ++length;
  }
  return highestValue;
}
