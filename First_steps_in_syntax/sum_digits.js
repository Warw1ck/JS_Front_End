function sumOfDigits(number) {
    const digitNum = String(number);
    let sumDigit = 0;
    for (let index = 0; index < digitNum.length; index++) {
        sumDigit += parseInt(digitNum[index]) ;
        
    }
    console.log(sumDigit)
    
}
sumOfDigits(242433)