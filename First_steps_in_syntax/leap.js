function checkLeapYear(year) {
    if (year%4===0) {
        if (year%100===0 && year%400!==0) {
            console.log('no');
        }else{
            console.log('yes')
        }
        
    }else{
        console.log('no')
    }
}
checkLeapYear(1984)