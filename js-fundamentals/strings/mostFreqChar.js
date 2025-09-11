
function mostFreqChar(str) {

    if (str.length === 0) return null;

    // Write a function that returns the character that appears the most times in a string.
    // initialize a map instance
    // populate map with char and assign count as value
    // return the highest value
    let freq = new Map()
    for(let char of str) {
        if(freq.has(char)) {
            freq.set(char, freq.get(char) + 1)
        } else {
            freq.set(char, 1)
        }
    }
    // 1- using manual for loops
    // let maxKey = null
    // let maxValue = -Infinity
    // for(const [key, value] of freq.entries()) {
    //     if(value > maxValue) {
    //         maxValue = value
    //         maxKey = key
    //     }
    // }
    // return maxKey

    // 2- using reduce / modern js
    let [maxKey] = [...freq.entries()].reduce((a, b) =>
        b[1] > a[1] ? b : a
    )
    return maxKey
}

console.log(mostFreqChar("banana"))

module.exports = mostFreqChar