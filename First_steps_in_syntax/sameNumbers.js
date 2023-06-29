function sumOfDigits(number) {
    const digitNum = String(number);
    let sumDigit = 0;
    let everythingSame = true;
    for (let index = 0; index < digitNum.length; index++) {
        sumDigit += parseInt(digitNum[index]) ;
        if (digitNum[index] !==digitNum[0]){
            everythingSame = false
        }
    }
    console.log(everythingSame)
    console.log(sumDigit)
    
}