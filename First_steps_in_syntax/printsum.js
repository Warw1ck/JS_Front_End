function printSumAndNumbers(startNum, endNum) {
    let listNumber = []
    let sumNum = 0
    for (let index = startNum; index <= endNum; index++) {
        listNumber.push(index)
        sumNum += index
    }
    console.log(listNumber.join(' '))
    console.log(`Sum: ${sumNum}`)
}
printSumAndNumbers(5, 10)