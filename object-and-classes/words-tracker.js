function trackWords(words) {
    let wordCount = []
    const target = words.shift().split(' ')
    target.forEach(element => {
        const result = words.reduce((num, word)=>{
            if (word === element) {
                return num + 1
            }else{
                return num
            }
        }, 0)
        wordCount.push({name:element, count: result})
    });
    wordCount.sort(function(a, b){return -a.count+b.count}).forEach(element => {
        console.log(element.name+ ' - ' + element.count)
        
    });
    
}
trackWords([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']
    )