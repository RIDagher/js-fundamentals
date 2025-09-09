function isAnagram(str1, str2) {

    if(str1.length === 0 || str2.length === 0) return false

    if (str1.length !== str2.length) return false;
    // 1- sort the strigs
    // 2- compare the strings
    
    let sortedStr1 = str1.split('').sort().join('')
    let sortedStr2 = str2.split('').sort().join('')

     return sortedStr1 === sortedStr2;
}

console.log(isAnagram("listen", "silent"))
console.log(isAnagram("hello", "silent"))

module.exports = isAnagram