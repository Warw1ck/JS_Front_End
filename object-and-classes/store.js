function storeStoke(products, update) {
    const store = {}
    for (let index = 0; index < products.length; index+=2) {
        if (!store.hasOwnProperty(products[index])){
            store[products[index]] = 0

        }
        store[products[index]] += Number(products[index+1])
        if (!store.hasOwnProperty(update[index])){
            store[update[index]] = 0

        }
        store[update[index]] += Number(update[index+1])
    }
    Object.keys(store).forEach(element => {
        console.log(`${element} -> ${store[element]}`)
        
    });

    
}
storeStoke([
    'Salt', '2', 'Fanta', '4', 'Apple', '14',
    'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7',
    'Tomatoes', '7', 'Bananas', '30'
    ]
    )