function calculateFruitPrice(name, weightInGrams, priceForKg) {
    console.log(`I need $${(priceForKg*(weightInGrams/1000)).toFixed(2)} to buy ${(weightInGrams/1000).toFixed(2)} kilograms ${name}.`)
    
}