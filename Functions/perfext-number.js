function findProperNum(num) {
    let divisors = [];
    for (let index = 1; index < num; index++) {
        if (num%index===0) {
            divisors.push(index)
        }
        
    }
    let result = divisors.reduce((a, b) => {
        return a + b;
      });
    
    if (num === result) {
        console.log('We have a perfect number!')
        
    }else{
        console.log("It's not so perfect.")
    }
    
}

findProperNum(6)