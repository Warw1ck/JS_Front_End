function printNthElement(array, num) {
    let number = num
    const oldArray = array
    let newArray = [];
    let value = 0
    while (value < oldArray.length) {
        newArray.push(oldArray[value])
        value+=number

        
    }
    console.log(newArray.join('\n'))
    
}
printNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2)