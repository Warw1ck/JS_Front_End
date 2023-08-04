window.addEventListener("load", solve);

function solve() {
  publishButton = document.querySelector('#publish-btn')
  publishButton.addEventListener('click', makePublish)
  function makePublish() {
    const taskTitle = document.querySelector('#task-title')
    const taskCategory = document.querySelector('#task-category')
    const taskContent = document.querySelector('#task-content')
    if (taskTitle.value && taskCategory.value && taskContent.value) {
        
        const listForTask = document.querySelector('#review-list')

        const newTask = document.createElement('li')
        newTask.classList = 'rpost'
        const articleTask = document.createElement('article')
        const buttonEditTask = document.createElement('button')
        buttonEditTask.classList = 'action-btn edit'
        buttonEditTask.innerText = 'Edit'
        const buttonPostTask = document.createElement('button')
        buttonPostTask.innerHTML = 'Post'
        buttonPostTask.classList = 'action-btn post'


        const title = document.createElement('h4')
        title.innerText = taskTitle.value

        const category = document.createElement('p')
        category.innerText = `Category: ${taskCategory.value}`
        
        const content = document.createElement('p')
        content.innerText = `Content: ${taskContent.value}`

        articleTask.appendChild(title)
        articleTask.appendChild(category)
        articleTask.appendChild(content)
        newTask.appendChild(articleTask)
        newTask.appendChild(buttonEditTask)
        newTask.appendChild(buttonPostTask)
        listForTask.appendChild(newTask)


        taskTitle.value = ''
        taskCategory.value = ''
        taskContent.value = ''

        buttonEditTask.addEventListener('click', editPost)

        function editPost() {
            const taskTitle = document.querySelector('#task-title')
            const taskCategory = document.querySelector('#task-category')
            const taskContent = document.querySelector('#task-content')
            taskTitle.value = document.querySelector('h4').innerText.substr(0,document.querySelector('h4').innerText.length)
            taskCategory.value = document.querySelectorAll('p')[0].innerText.substr(9, document.querySelectorAll('p')[0].innerText.length)
            taskContent.value = document.querySelectorAll('p')[1].innerText.substr(9, document.querySelectorAll('p')[1].innerText.length)
            const listForTask = document.querySelector('#review-list')
            listForTask.innerHTML = ''
        }

        buttonPostTask.addEventListener('click', PostPost)

        function PostPost() {
            const postTask = document.createElement('li')
            postTask.classList = 'rpost'
            postTask.appendChild(articleTask)
            document.querySelector('#published-list').appendChild(postTask)
            listForTask.innerHTML = ''

            
        }
    }
  }


  


}