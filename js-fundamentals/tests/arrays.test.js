// 1- Import the function
// 2- Call it with a sample output
// 3- Assert that the result matches the expectation using expect(...).toBe(...).


const findMax = require("../arrays/findMax.js")
const removeDuplicates = require("../arrays/removeDuplicates.js")

// toBe checks for object identity (reference equality)
test("find max in array", () => {
    expect(findMax([2,7,3,1,9,])).toBe(9);
})

test("works with negative numbers", () => {
  expect(findMax([-5, -2, -10, -1])).toBe(-1);
});

// To compare arrays by value, use toEqual:
test("remove duplicates from array", () => {
expect(removeDuplicates([1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
})