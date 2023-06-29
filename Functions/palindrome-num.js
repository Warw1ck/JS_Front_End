function findPalindromeNumbers(array) {
    let palindromes = [];
    array.forEach(num => {
        const element = String(num)
        for (let index = 0; index < Math.ceil(element.length/2); index++) {
            const firstChar = element[index];
            const secondChar =  element[element.length -1 - index];
            if (firstChar !== secondChar) {
                palindromes.push(false)
                break
            }else if (index === Math.ceil(element.length/2)-1 ){
                palindromes.push(true)
                
            }
        }
    });
    console.log(palindromes.join('\n'))
}

findPalindromeNumbers([32,2,232,1010])