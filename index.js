function largestSubarraySum(array) {
  let largest = Number.MIN_SAFE_INTEGER
  let sum = 0
  array.forEach(n => {
    largest = sum + n > largest ? sum + n : largest
    sum = sum + n > 0 ? sum + n : 0
  })

  return largest
}

// BREAKDOWN:
// if sum + array[0] > largest then largest = array[0] + sum AND sum = array[0] + sum else if sum < 1 then sum = 0
// // => sum = 1  ; largest = 1 ;
// if sum + array[1] ...
// // => sum = 0  ; largest = 1 ;
// if sum + array[2] ...
// // => sum = 5 ; largest = 5 ;
// if sum + array[3] ...
// // => sum = 8 ; largest = 8 ;
// if sum + array[4] ...
// // => sum = 1 ; largest = 8 ;
//
// [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

// FIRST DRAFT:

// function largestSubarraySum(array) {
//
//   if (array[0] < 1) {
//     for (let i = 1; i < array.length; i++) {
//       if (array[i] > array[0]) {
//         return largestSubarraySum(array.slice(i))
//       }
//     }
//
//     return array[0]
//   }
//
//   let largestSum = array[0]
//   let sum = array[0]
//
//   for (let i = 1; i < array.length; i++) {
//     sum += array[i]
//     if (sum > largestSum) {
//       largestSum = sum
//     } else if (sum < 1) {
//       let newSum = largestSubarraySum(array.slice(i+1))
//       if (newSum > largestSum) {
//         return newSum
//       } else {
//         return largestSum
//       }
//     }
//   }
//   return largestSum
// }
