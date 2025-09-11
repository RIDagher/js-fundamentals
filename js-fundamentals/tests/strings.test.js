// 1- Import the function
// 2- Call it with a sample output
// 3- Assert that the result matches the expectation using expect(...).toBe(...).

const reverseIt = require("../strings/reverseString")
const isPalindrome = require("../strings/isPallindrome")
const countVowels = require("../strings/countVowels")
const isAnagram = require("../strings/isAnagram")
const nonRepeatingCharacter = require('../strings/nonRepeatingCharacter')
const mostFreqChar = require('../strings/mostFreqChar')


describe("Return the most frequent Char", () => {
  test("return 'a' for 'banana'", () => {
    expect(mostFreqChar("banana")).toBe("a")
  })
  test("return null for empty string", () => {
    expect(mostFreqChar("")).toBe(null)
  })
  test("return 'j' for 'juice', (all appear once)", () => {
    expect(mostFreqChar("juice")).toBe("j")
  })
})

describe("Return the first non repeating character", () => {

    test("return 'w' 'swiss' ", () => {
        expect(nonRepeatingCharacter("swiss")).toBe("w")
    })
    test("return null 'aabbcc' ", () => {
        expect(nonRepeatingCharacter("aabbcc")).toBe(null)
    })
    test("works with an empty string", () => {
    expect(nonRepeatingCharacter("")).toBe(null);
  });

  test("works with single character string", () => {
    expect(nonRepeatingCharacter("z")).toBe("z");
  });
})

test("Check if strings are anagram", () => {
    expect(isAnagram("hello", "silent")).toBe(false)
     expect(isAnagram("triangle", "integral")).toBe(true);
    expect(isAnagram("hello", "silent")).toBe(false);
    expect(isAnagram("rat", "car")).toBe(false);
})

test("Count vowels in a string", () => {
    expect(countVowels("hello")).toBe(2);
    expect(countVowels("hello")).toBe(2);
    expect(countVowels("javascript")).toBe(3);
    expect(countVowels("rhythm")).toBe(0); // no vowels
    expect(countVowels("AEIOU")).toBe(5);
})

test("Check if a string is palindrome", () => {
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("hello")).toBe(false);
  expect(isPalindrome("a")).toBe(true); // single char edge case
});

test("Reverse a string", () => {
    expect(reverseIt("hello")).toBe("olleh")
})










