function isPallindrome(str) {
    // 1- convert string to char array
    
    let left = 0;
    let right = str.length -1  

    while(left < right) {
        if(str[left] !== str[right] ) {
            return false
        }

            left ++
            right--
    }
    return true 
}

console.log(isPallindrome("hello"))
console.log(isPallindrome("racecar"))

module.exports = isPallindrome