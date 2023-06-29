function pascalSplit(params) {
    let words = [];
    let currentWord = '';

    for (let index = 0; index < params.length; index++) {
        let ch = params[index]
        if (ch == ch.toUpperCase()) {
            if (currentWord) {
                words.push(currentWord)
                
            }
            currentWord = ch
        }else{
            currentWord += ch
        }
        if (index === params.length - 1) {
            words.push(currentWord)
        }
    };
    console.log(words.join(', '))
}
pascalSplit('SplitMeIfYouCanHaHaYouCantOrYouCan')