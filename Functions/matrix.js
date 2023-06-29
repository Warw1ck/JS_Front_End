function makeNumberMatrix(number) {
    let matrix = []
    for (let index = 0; index < number; index++) {
        matrix.push([])
        let element = matrix[index]
        for (let index = 0; index < number; index++) {
            element.push(number)
        }
        console.log(element.join(' '))
    }
    
}
makeNumberMatrix(5)