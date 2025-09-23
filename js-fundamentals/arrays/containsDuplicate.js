// Write a function containsDuplicate(arr) that returns true if any number appears more than once.
function containsDuplicate(arr) {
    // Using set, bcz it stors only unique values
    // compare it to the orr array
    // efficient (O(n))
    return new Set(arr).size !== arr.length
}

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))

module.exports = containsDuplicate