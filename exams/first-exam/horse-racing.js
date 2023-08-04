function horseRace(commands) {
    let horses = commands.shift().split('|')
    const allCommands = commands
    commandAction = {
        Retake(overtakingHorse, overtakeHorse ){
            const overtakingHorsePosition = horses.indexOf(overtakingHorse)
            const overtakeHorsePosition = horses.indexOf(overtakeHorse)
            if (overtakingHorsePosition < overtakeHorsePosition){
                horses[overtakingHorsePosition] = overtakeHorse
                horses[overtakeHorsePosition] = overtakingHorse
                console.log(`${overtakingHorse} retakes ${overtakeHorse}.`)
            }
        },
        Trouble(horseName){
            horsePosition = horses.indexOf(horseName)
            if (horsePosition !== 0) {

                horses[horsePosition] = horses[horsePosition-1]
                horses[horsePosition-1] = horseName
                console.log(`Trouble for ${horseName} - drops one position.`)
            }

        },
        Rage(horseName){
            horsePosition = horses.indexOf(horseName)
            if (horsePosition !== horses.length-1 && horsePosition !== horses.length-2 && horsePosition !== horses.length-3 && horsePosition !== 0){
                horses.splice(horsePosition, 1)
                horses = [...horses.slice(0, horsePosition+1), horseName, ...horses.slice(horsePosition+1, horses.length)]
                
            }else{
                horses.splice(horsePosition, 1)
                horses.push(horseName)
            }
            console.log(`${horseName} rages 2 positions ahead.`)

        },
        Miracle(){
            const horseName = horses.shift()
            horses.push(horseName)
            console.log(`What a miracle - ${horseName} becomes first.`)
        }
    }
    for (const element of allCommands) {
        if (element === 'Finish') {
            break
            
        }
        const command = element.split(' ')
        commandName = command.shift()
        commandAction[`${commandName}`](...command)
        
    }
    console.log(`${horses.join('->')}\nThe winner is: ${horses[horses.length-1]}`)
}
horseRace(['Bella|Alexia|Sugar',
'Retake Alexia Sugar',
'Rage Bella',
'Trouble Bella',
'Finish'])


