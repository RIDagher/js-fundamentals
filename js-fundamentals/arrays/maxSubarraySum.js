/**
 * Finds the maximum sum of a contiguous subarray using Kadane's Algorithm
 * 
 * This algorithm efficiently solves the Maximum Subarray Problem in O(n) time.
 * The key insight is that at each position, we decide whether to:
 * 1. Start a new subarray from the current element, or
 * 2. Extend the existing subarray by including the current element
 * 
 * @param {number[]} arr - Array of integers (can contain negative numbers)
 * @returns {number} The maximum sum of any contiguous subarray
 * 
 * Example: [-2,1,-3,4,-1,2,1,-5,4] 
 * The subarray [4,-1,2,1] has the maximum sum of 6
 */
function maxSubarraySum(arr) {
    // Handle edge case: empty array
    if(arr.length === 0) return 0;

    // Initialize both sums with the first element
    let currentSum = arr[0];  // Sum of current subarray ending at position i
    let maxSum = arr[0];      // Maximum sum found so far

    // Iterate through the array starting from the second element
    for(let i = 1; i < arr.length; i++) {
        let num = arr[i];

        // Key decision: either start fresh from current number
        // or extend the existing subarray by adding current number
        // We choose whichever gives us a larger sum
        currentSum = Math.max(num, currentSum + num);

        // Update the overall maximum if current subarray sum is larger
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubarraySum([1]));                     // 1
console.log(maxSubarraySum([5,4,-1,7,8]));            // 23

module.exports = maxSubarraySum;