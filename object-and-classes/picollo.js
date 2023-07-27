function parkingRegister(commands){
    parking = {}
    commands.forEach(command => {

        const [direction, carNumber] = command.split(', ')
        if (direction === 'IN') {
            parking[carNumber] = undefined
        }else if (direction === 'OUT' && parking.hasOwnProperty(carNumber)) {
           delete parking[carNumber]
        } 

        
    });
    Object.keys(parking).sort().forEach(key => {
        console.log(key)
        
    });
}
parkingRegister(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)