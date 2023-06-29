function sumOddEven(num) {
    let numberString = String(num)
    let oddSum = 0;
    let evenSum = 0;
    for (let index = 0; index < numberString.length; index++) {
        const element = parseInt(numberString[index]);
        if (element % 2 == 0){
            evenSum += element
        }else{
            oddSum += element
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
sumOddEven(1000435)