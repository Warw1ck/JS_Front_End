// TODO:
function attachEvents() {
    const pageButtons = {
        loadBtn : document.querySelector('#load-board-btn'),
        addBtn : document.querySelector('#create-task-btn')
    }
    taskForm = {
        title: document.querySelector('#title'),
        description: document.querySelector('#description')

    }
    const sections = {
        'ToDo': document.querySelector('#todo-section .task-list'),
        'In Progress':document.querySelector('#in-progress-section .task-list'),
        'Code Review': document.querySelector('#code-review-section .task-list'),
        'Done': document.querySelector('#done-section .task-list')
    }
    const nextStatus = {
        'ToDo': 'In Progress',
        'In Progress':'Code Review',
        'Code Review': 'Done',
        'Done': 'Done'
    }
    const buttonsNames = {
        
        'ToDo': 'Move to In Progress',
        'In Progress':'Move to Code Review',
        'Code Review': 'Move to Done',
        'Done': 'Close'
    }
    pageButtons.loadBtn.addEventListener('click', loadTasks)
    function loadTasks() {
        Object.values(sections).forEach(element => {
            element.innerHTML = ''
            
        });
        fetch('http://localhost:3030/jsonstore/tasks/')
        .then((res)=>res.json())
        .then((tasksData)=>{
            Object.entries(tasksData).forEach(([key, value]) => {
                const taskElement = elementCreate('li', ['task'], null, null, null)
                elementCreate('h3', null, value.title, null, taskElement)
                elementCreate('p', null, value.description, null, taskElement)
                const moveBtn = elementCreate('button', null, buttonsNames[value.status], null, taskElement)
                console.log(value.status, sections[value.status])

                sections[value.status].appendChild(taskElement)
                
                moveBtn.addEventListener('click', (e)=>{
                    if (value.status === 'Done') {
                        fetch(`http://localhost:3030/jsonstore/tasks/${key}`, { method: 'DELETE' })
                        .then((res)=> res.json()).then((Data)=>{
                                loadTasks()
                            })
    
                        
                    }else{
                        fetch(`http://localhost:3030/jsonstore/tasks/${key}`, {
                            method: 'PATCH',
                            body: JSON.stringify({
                                status: nextStatus[value.status],
                            }),
                            headers: {
                                'Content-type': 'application/json; charset=UTF-8',
                            },
                            }).then((res)=> res.json()).then((Data)=>{
                                loadTasks()
                            })
                    }
                    
                    
                })
            });
        })
        
    }
    pageButtons.addBtn.addEventListener('click',(e)=>{
        const title = taskForm.title
        const description = taskForm.description
        fetch('http://localhost:3030/jsonstore/tasks/', {
        method: 'POST',
        body: JSON.stringify({
            title: title.value,
            description: description.value,
            status: 'ToDo'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        }).then((res)=> res.json())
        title.value = ''
        description.value = ''
        loadTasks()

    })

    function elementCreate(type, classes, textContent, id, fatherName) {
        const element = document.createElement(type)
    
        if (classes) {
            element.classList.add(...classes);
        }
    
        if (textContent) {
            element.textContent = textContent
        }
    
        if (id) {
            element.setAttribute("id", id)
            
        }
        if (fatherName) {
            fatherName.appendChild(element)
    
    
        }
        return element
    }

}

attachEvents();