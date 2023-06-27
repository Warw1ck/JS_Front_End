function findHashTag(sentence) {
    sentence.split(' ').forEach(element => {
        if (element[0] === '#'){
            element = element.replace('#', '')
            if (element){
                console.log(element)
            }
        }
    });
    
}
findHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')