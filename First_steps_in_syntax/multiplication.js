function multiplicateTableNumber(number) {
    let result = [];
    for (let index = 1; index <= 10; index++) {
        result.push(`${number} X ${index} = ${number * index}`)
    }   
    console.log(result.join('\n'))
}
multiplicateTableNumber(5)