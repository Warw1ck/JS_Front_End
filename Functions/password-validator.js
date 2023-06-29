function passwordValidator(password) {
    let regLength= /\S{6,10}/;
    let resultLength= regLength.test(password) ? true : console.log("Password must be between 6 and 10 characters");
    
    let regWord= /[^a-zA-Z0-9]+/;
    let resultWord= regWord.test(password) ? console.log("Password must consist only of letters and digits") : true;
    
    let regNumber= /\d{2,}\S+/;
    let resultNumber= regNumber.test(password) ? true : console.log("Password must have at least 2 digits");
    
    
    if(resultWord && resultLength && resultNumber){
        console.log('Password is valid')
    }
}

passwordValidator('logIn')