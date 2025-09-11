
const factorialIterative = require('../recursion/factorialIterative')

describe("Factorial Iterative", () => {
    test("calculate factorial of 5", () => {
        expect(factorialIterative(5)).toBe(120)
    })

    test("calculate factorial of 0", () => {
        expect(factorialIterative(0)).toBe(1)
    })
})