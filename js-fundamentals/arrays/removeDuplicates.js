
function removeDuplicates(arr) {

    // return array without duplicates
    
    // initialize a new array to store unique values
    let newArr = []

    for(let i =0; i <arr.length; i++) {

        // .includes methos to ensure only unique value  are beig being added
        if( !newArr.includes(arr[i]) ) {

            newArr.push(arr[i])
        }
    }

    return newArr;

}

console.log(removeDuplicates([1, 1, 2, 3, 3,4,4]))

module.exports = removeDuplicates;