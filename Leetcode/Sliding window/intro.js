/* Maximum Sum Subarray of Size K (easy)

Given an array of positive numbers and a 
positive number ‘k’, find the maximum sum of 
any contiguous subarray of size ‘k’.

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
*/


const max_sub_array_of_size_k = function(k, arr) {
    // TODO: Write your code here
  
    let max = 0,
        start = 0,
        tempSum = 0;
  
    for(let end = 0; end < arr.length; end++) {
      tempSum = tempSum + arr[end];
  
      if(end >= k - 1) {
        max = Math.max(max, tempSum);
        tempSum = tempSum - arr[start];
        start = start + 1;
      }
    }
    if(max > 0) {
      return max;
    }
};



  function max_sub_array_of_size_k(k, arr) {
    let maxSum = 0,
      windowSum = 0,
      windowStart = 0;
  
    for (window_end = 0; window_end < arr.length; window_end++) {
      windowSum += arr[window_end]; // add the next element
      // slide the window, we don't need to slide if we've not hit the required window size of 'k'
      if (window_end >= k - 1) {
        maxSum = Math.max(maxSum, windowSum);
        windowSum -= arr[windowStart]; // subtract the element going out
        windowStart += 1; // slide the window ahead
      }
    }
    return maxSum;
  }