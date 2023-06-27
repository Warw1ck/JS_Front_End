function cookingByNumbers(number, ...args) {
    let result = number;
    let commands ={
        'chop': function (num) {
            return num/2
        },
        'dice': function (num) {
            return Math. sqrt(num) 
        },
        'spice': function (num) {
            return num+1
             
        },
        'bake': function (num) {
            return num*3
        },
        'fillet': function (num) {
            return num-(num*20/100)
        },
    }
    for (let index = 0; index < args.length; index++) {
        const element = args[index];
        result = commands[element](result)
        console.log(result)
        
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 
'fillet')