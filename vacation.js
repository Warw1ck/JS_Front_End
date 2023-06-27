function calculatedVacations(groupNum, type, day) {
    let totalPrice = 0;
    let pricePerOnePerson = 0;
    let discountsVacation = 0;
    if (type === 'Students') {
        if (day === 'Friday') {
            pricePerOnePerson = 8.45
        }else if (day === 'Saturday') {
            pricePerOnePerson = 9.80
        }else if (day === 'Sunday') {
            pricePerOnePerson = 10.46
        } 
        if (groupNum >= 30){
            discountsVacation = 15
        }
    }else if (type === 'Business') {
        if (day === 'Friday') {
            pricePerOnePerson = 10.90
        }else if (day === 'Saturday') {
            pricePerOnePerson = 15.60
        }else if (day === 'Sunday') {
            pricePerOnePerson = 16
        } 
        if (groupNum >= 100){
            groupNum -= 10
        }
    }else if (type === 'Regular') {
        if (day === 'Friday') {
            pricePerOnePerson = 15
        }else if (day === 'Saturday') {
            pricePerOnePerson = 20
        }else if (day === 'Sunday') {
            pricePerOnePerson = 22.50
        } 
        if (groupNum >= 10 && groupNum <= 20){
            discountsVacation = 5
        }
    }
    totalPrice = pricePerOnePerson * groupNum - (pricePerOnePerson * groupNum * discountsVacation/100)
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

calculatedVacations(35,
    "Students",
    "Sunday")