
// First Non-Repeating Character
function nonRepeatingCharacter(str) {
    // count how many times each char appears
    // 1- using plain object
    // let frq = {}
    // for (let char of str) {
    //     frq[char] = (frq[char] || 0) + 1
    // }
    // for(let char of str) {
    //     if(frq[char] === 1) {

    //         return char;
    //     }
    // }
    // return null
    
    // 2- Using map
    let freq = new Map();

    // count frequencies
    for( let char of str) {
        if(freq.has(char)) {
            freq.set(char, freq.get(char) + 1);
        } else {
            freq.set(char, 1)
        }
    }

    for(let char of str) {
        if(freq.get(char) === 1) {
            return char
        }
    }

    return null
}

console.log(nonRepeatingCharacter("swiss"))
console.log(nonRepeatingCharacter("aabbcc"))
module.exports = nonRepeatingCharacter