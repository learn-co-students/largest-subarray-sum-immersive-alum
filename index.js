let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4];
let array2 = [-1,-2,-3,-4,-5];

const largestSubarraySum = arr => {
  //start with first item in the array and add next item to it
  // everytime keep track of indicies of the numbers added
  // if the running number is more than the already-identified "max" replace that max with the newly found one
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0
    let combinationsCheckedInThisRun = []
    for (let j = i; j < arr.length; j++) {
      combinationsCheckedInThisRun.push(j);
      currentSum += parseInt(arr[j]);
      result[currentSum] = [...combinationsCheckedInThisRun];
    }
  }
  let foundMax = Object.keys(result).sort((a, b) =>
  parseInt(a) > parseInt(b) ? -1 : 1
)[0];
// let resultPair = {sum:foundMax,path:result[foundMax]}
// return resultPair
answerToBeReturned = Object.keys(result).sort((a, b) => parseInt(a) > parseInt(b) ? -1 : 1)[0]
return (answerToBeReturned<0 ? 0 :answerToBeReturned) ;
};

console.log(largestSubarraySum(array))
