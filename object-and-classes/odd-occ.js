function findOddWord(words) {
    const wordsOdd = []
    const counter = {}
    
    words.split(' ').forEach(word => {
        const element = word.toLowerCase()
        if (!counter.hasOwnProperty(element)) {
            counter[element] = 0
            
        }
        counter[element] += 1

        
    });
    Object.keys(counter).forEach(key => {
        if (counter[key]%2===1) {
            wordsOdd.push(key)
        }
        
    });
    console.log(wordsOdd.join(' '))
}
findOddWord('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')