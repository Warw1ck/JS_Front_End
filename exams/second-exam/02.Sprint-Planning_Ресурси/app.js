window.addEventListener('load', solve);

function solve() {
    let totalPoints = 0
    
    const tasks = []
    const sprintForm = {
        taskId: document.querySelector('#task-id'),
        title: document.querySelector('#title'),
        description: document.querySelector('#description'),
        title: document.querySelector('#title'),
        label: document.querySelector('#label'),
        points: document.querySelector('#points'),
        assignee: document.querySelector('#assignee')
    }
    mainButtons = {
        createMainBtn: document.querySelector('#create-task-btn'),
        deleteMainBtn: document.querySelector('#delete-task-btn')
    }
    icons = {
        'Feature': '&#8865',
        'Low Priority Bug': '&#9737',
        'High Priority Bug': '&#9888'

    }
    iconClass = {
        'Feature': "feature",
        'Low Priority Bug': "low-priority",
        'High Priority Bug': "high-priority"

    }
    mainButtons.createMainBtn.addEventListener('click', createTask)
    function createTask() {

        if (!sprintForm.title.value || !sprintForm.description.value || !sprintForm.assignee.value || !sprintForm.label.value || !sprintForm.points.value) {
            return
            
        }
        const article = elementCreate('article', ['task-card'], null,  `task-${tasks.length +1}`, null)
        

        elementCreate('div', ['task-card-label', iconClass[sprintForm.label.value]], `${sprintForm.label.value} ${icons[sprintForm.label.value]}`, null, article)
        elementCreate('h3', ['task-card-title'], sprintForm.title.value, null, article)
        elementCreate('p', ['task-card-description'], sprintForm.description.value, null, article)
        elementCreate('div', ['task-card-points'], `Estimate at ${sprintForm.points.value}pts`, null, article)
        elementCreate('div', ['task-card-assignee'], `Assigned to: ${sprintForm.assignee.value}`, null, article)
        actions = elementCreate('div', ['task-card-actions'])
        deleteBtn = elementCreate('button', null, 'Delete', null, actions)
        article.appendChild(actions)
        document.querySelector('#tasks-section').appendChild(article)

        const task = {
            
        }

        Object.entries(sprintForm).forEach(([key, value]) => {
            task[key] = value.value
            value.value = ''
        });
        task.taskId = `task-${tasks.length +1}`

        tasks.push(task)
        document.querySelector('#total-sprint-points').textContent = `Total Points ${tasks.reduce((total, task)=>total+Number(task.points), 0)}pts`
        deleteBtn.addEventListener('click', (e)=>{
            buttonArticle = e.target.parentElement.parentElement
            const myTask = tasks.find((task)=>{
                return task.taskId === buttonArticle.getAttribute("id")
            })
            console.log(tasks)
            console.log(myTask)
            Object.entries(sprintForm).forEach(([key, value]) => {
                sprintForm[key].value = myTask[key]
            
            });
            mainButtons.createMainBtn.disabled = true
            mainButtons.deleteMainBtn.disabled = false

        })

    }
    mainButtons.deleteMainBtn.addEventListener('click', (e)=>{
        document.querySelector(`#${sprintForm.taskId.value}`).remove()
        console.log(tasks)
        console.log(sprintForm.taskId.value)
        tasks.splice(tasks.indexOf(tasks.find((task)=>{return sprintForm.taskId.value == task.taskId})),1)
        mainButtons.createMainBtn.disabled = false
        mainButtons.deleteMainBtn.disabled = true
        Object.entries(sprintForm).forEach(([key, value]) => {
            value.value = ''
        });
        document.querySelector('#total-sprint-points').textContent = `Total Points ${tasks.reduce((total, task)=>total+Number(task.points), 0)}pts`


    })

    function elementCreate(type, classes, textContent, id, fatherName) {
        const element = document.createElement(type)
    
        if (classes) {
            element.classList.add(...classes);
        }
    
        if (textContent) {
            element.innerHTML = textContent
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
