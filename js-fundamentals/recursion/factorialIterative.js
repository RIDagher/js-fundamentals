function factorialIterative(n) {

    if (n < 0) return null;
    
    let result = 1;
    for(let i = 1; i <= n ; i++ ) {

        result *= i;

    }
    return result;
}

console.log(factorialIterative(5))