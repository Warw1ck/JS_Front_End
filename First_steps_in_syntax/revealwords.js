function revealWords(words, sentence) {
    const array = words.split(', ')
    let updatedSentence = sentence
    array.forEach(element => {
        updatedSentence = updatedSentence.replace('*'.repeat(element.length), element)
        
    });
    console.log(updatedSentence)
}
revealWords('great, learning','softuni is ***** place for ******** new programming languages')