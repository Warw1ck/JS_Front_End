function revealWords(word, sentence) {
    const array = word
    let updatedSentence = sentence
    
    if (updatedSentence.toLowerCase().includes(word)) {
        console.log(word)
    }else{
        console.log(`${word} not found!`)
    }
}