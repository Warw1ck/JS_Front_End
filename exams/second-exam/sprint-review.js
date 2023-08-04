function calculateSprintStatus(commands) {
    const board = {

    }
    let ptsTodoPoints = 0    
    let ptsProgressPoints = 0    
    let ptsReviewPoints = 0    
    let ptsDonePoints = 0    

    personsNumber = Number(commands.shift())
    for (let index = 0; index < personsNumber; index++) {
        const [personName, taskId, title, status, estimatePoints] = commands[index].split(':');
        if (!board.hasOwnProperty(personName)) {
            board[personName] = []
        }
        board[personName].push({taskId: taskId, title:title, status:status, estimatePoints:estimatePoints})

        
    }
    
    const commandsCommands = {
        'Add New':function (personName, taskId, title, status, estimatePoints) {
            if (board.hasOwnProperty(personName)) {
                board[personName].push({taskId: taskId, title:title, status:status, estimatePoints:estimatePoints})
            }else{
                console.log(`Assignee ${personName} does not exist on the board!`)
            }
        },
        'Change Status':function (personName, taskId, newStatus) {
            if (board.hasOwnProperty(personName)) {
                const task = board[personName].find((task)=>{return task.taskId == taskId})
                if (!task) {
                    console.log(`Task with ID ${taskId} does not exist for ${personName}!`)
                    return
                }
                task.status = newStatus

            }else{
                console.log(`Assignee ${personName} does not exist on the board!`)
            }
            
        },
        'Remove Task':function (personName, index) {
            if (board.hasOwnProperty(personName)) {
                if (board[personName].length>index && index>=0) {
                    
                    board[personName].splice(index, 1)

                }else{
                    console.log(`Index is out of range!`)
                }
            }else{
                console.log(`Assignee ${personName} does not exist on the board!`)
            }
            
        }
    }   
    for (let index = personsNumber; index < commands.length; index++) {
        const [commandName, ...data] = commands[index].split(':');
        commandsCommands[commandName](...data)
        
    }
    for (const tasks of Object.values(board)) {
        ptsTodoPoints += tasks.filter((task) => task.status == 'ToDo')
                              .reduce((total, task) => total + Number(task.estimatePoints), 0);
    
        ptsProgressPoints += tasks.filter((task) => task.status == 'In Progress')
                                  .reduce((total, task) => total + Number(task.estimatePoints), 0);
    
        ptsReviewPoints += tasks.filter((task) => task.status == 'Code Review')
                                .reduce((total, task) => total + Number(task.estimatePoints), 0);
    
        ptsDonePoints += tasks.filter((task) => task.status == 'Done')
                              .reduce((total, task) => total + Number(task.estimatePoints), 0);
    }
    let sprint;
    if (ptsDonePoints >= ptsTodoPoints+ptsProgressPoints+ptsReviewPoints) {
        sprint = 'Sprint was successful!'
    }else{
        sprint = 'Sprint was unsuccessful...'
    }
    console.log(`ToDo: ${ptsTodoPoints}pts\nIn Progress: ${ptsProgressPoints}pts\nCode Review: ${ptsReviewPoints}pts\nDone Points: ${ptsDonePoints}pts\n${sprint}`)
}









calculateSprintStatus(      [
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',
]

)