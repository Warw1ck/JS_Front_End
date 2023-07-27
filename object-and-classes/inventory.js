function heroInventory(info) {
    const heros = []
    info.forEach(element => {
        let [name, level, weapon]= element.split(' / ')
        heros.push({Hero: name, level: Number(level), weapon: weapon})
        
    });
    heros.sort(function(a, b){return a.level-b.level}).forEach(element => {
        console.log('Hero: ' + element.Hero)
        console.log('level => ' + element.level)
        console.log('items => ' + element.weapon)            
        
        
    });
}
heroInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )