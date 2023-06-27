function nameOrder(array) {
    let arraySort = array.sort((a, b)=> a - b);
    const smallNumbers = arraySort.slice(0, Math.trunc(arraySort.length/2))
    const bigNumbers = arraySort.slice( Math.trunc(arraySort.length/2), arraySort.length).reverse()
    let newArray = []

    for (let index = 0; index < Math.trunc(arraySort.length/2); index++) {
        newArray.push(smallNumbers.shift())
        newArray.push(bigNumbers.shift())
    }
    console.log(newArray.join('\n'))
}