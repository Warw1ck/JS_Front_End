function movieArrangement(commands) {

    let result = []
    commands.forEach(command => {
        let statement = command.split(' ')
        if (statement.includes('addMovie')) {
            statement.shift()
            result.push({name: statement.join(' '), date: undefined, director: undefined})
        }
        
        result.forEach(element => {
            if (statement.includes('directedBy') && element.name === statement.slice(0, statement.indexOf('directedBy')).join(' ')) {
                element.director = statement.slice(statement.indexOf('directedBy')+1, statement.length).join(' ')
            }else if (statement.includes('onDate') && element.name === statement.slice(0, statement.indexOf('onDate')).join(' ')){
                element.date = statement.slice(statement.indexOf('onDate')+1, statement.length).join(' ')   
            }
        });
        
    });
    result.forEach(element => {
        if (!element.date || !element.director) {
            result.splice(result.indexOf(element))
        }else{
            console.log(JSON.stringify(element))
        }
        
    });
}
movieArrangement([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )