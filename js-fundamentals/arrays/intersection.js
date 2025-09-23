function intersection(arr1, arr2) {

    // Using nested loop (O(n + m)
    // let result = []
    // for(let i = 0; i < arr1.length; i ++) {
    //     for(let j=0; j< arr2.length; j++) {

    //         if(arr1[i] === arr2[j] && !result.includes(arr1[i])) {
    //             result.push(arr1[i])
    //         }
    //    }
    // }
    // return result

    // Using set O(n * m))
    let arrSet = new Set(arr1)
    let result = []
    for(let num of arr2) {
        if(arrSet.has(num) && !result.includes(num)) {
            result.push(num)
        }
    }
    return result
}

console.log(intersection([1,2,2,1], [2,2]))

module.exports = intersection;