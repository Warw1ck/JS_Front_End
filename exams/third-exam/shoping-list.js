function createShoppingList(commands) {
    const products = commands.shift().split('!')
    const typeCommands = {
        'Urgent': function(item){
            if (!products.includes(item)) {
                products.unshift(item)
                
            }
        },
        'Unnecessary': function(item){
            if (products.includes(item)) {
                products.splice(products.indexOf(item), 1)
                
            }
        },
        
        'Correct': function(oldItem, newItem){
            if (products.includes(oldItem)) {
                products[products.indexOf(oldItem)] = newItem
                
            }
        },
        'Rearrange': function(item){
            if (products.includes(item)) {
                products.splice(products.indexOf(item), 1)
                products.push(item)
                
            }
        }
    }
    for (const element of commands) {
        if (element === 'Go Shopping!') {
            break
        }
        const [type, ...data] = element.split(' ')
        typeCommands[type](...data)
    }
    console.log(products.join(', '))
}

createShoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Tomatoes",
"Unnecessary Pepper",
"Correct Banana Onion",
"Rearrange Water",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
