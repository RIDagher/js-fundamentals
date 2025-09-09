function countVowels(str) {
    let vowels = ["a", "e", "i", "o", "u"]
    let count = 0;
    for(let s of str.toLowerCase()) {
        if(vowels.includes(s)) {
            
             count ++
        }        
    }
    return count
}

console.log(countVowels("javascript"))

module.exports = countVowels