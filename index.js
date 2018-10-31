
const largestSubarraySum = (array)=>{
  let ans = -2147483647, sum = 0;
  for(let n of array ){
    ans = Math.max( ans, sum + n);
    sum = sum+n >= 0? sum+n:0;
  }
  return ans;
}
