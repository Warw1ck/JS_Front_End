function sumOfFactorialNumbers(...array) {
    let result = [];
    array.forEach(element => {
        let factorial = 1;
        for (let index = 1; index <= element; index++) {
            factorial *= index             
        }
        result.push(factorial)
    });
    console.log((result[0]/result[1]).toFixed(2))
    
}
sumOfFactorialNumbers(6, 2)