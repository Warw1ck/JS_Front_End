function printElementsBetween(firstChar, secondChar) {
    let elements = [];
    let one;
    let second;
    if (firstChar.charCodeAt(0)<secondChar.charCodeAt(0)){
        one = firstChar;
        second = secondChar;
    }else{
        second = firstChar;
        one = secondChar;
    }
    for (let index = one.charCodeAt(0)+1; index < second.charCodeAt(0); index++) {

        elements.push(String.fromCharCode(index))
        
    }
    console.log(elements.join(' '))
}
printElementsBetween('a', 'd')