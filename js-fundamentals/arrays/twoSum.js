// Given an array of numbers and a target, return the indices of the two numbers that add up to the target.

function twoSum(arr, target) {
 
    // 1- we need indexes not value
    // check if two values 

    for(let i=0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) return [i, j]
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

console.log(twoSum([2, 15, 11, 7], 9))
module.exports = twoSum