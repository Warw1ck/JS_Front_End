function nameOrder(params) {
    let array = params.sort()
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(`${index+1}.${element}`)
        
    }
}
nameOrder(["John", 
"Bob", 
"Christina", 
"Ema"])