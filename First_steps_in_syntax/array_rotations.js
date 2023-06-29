function rotations(numbers, rotation) {
    let rotatedNumbers = numbers;
    for (let index = 0; index < rotation; index++) {
        const element = rotatedNumbers.shift();
        numbers.push(element)
    }
    console.log(rotatedNumbers.join(' '))
}
rotations([2, 4, 15, 31], 5)