function attachEvents() {
    const select = document.querySelector('#posts')
    const PostInfo = {
        postTitle: document.querySelector('#post-title'),
        postBody: document.querySelector('#post-body'),
        postComments: document.querySelector('#post-comments')

    }

    fetch('http://localhost:3030/jsonstore/blog/posts')
    .then((res)=>res.json())
    .then((postData)=>{
        Object.values(postData).forEach(post => {
            elementCreate('option', null, post.title, null, select, post.id)
        });
    })

    document.querySelector('#btnViewPost').addEventListener('click', (e)=>{
        fetch(`http://localhost:3030/jsonstore/blog/posts/${select.value}`)
            .then((res)=>res.json())
            .then((postData)=>{
                PostInfo.postTitle.textContent = postData.title
                PostInfo.postBody.textContent = postData.body

        fetch(`http://localhost:3030/jsonstore/blog/comments/`)
        .then((res)=>res.json())
        .then((comments)=>{
            PostInfo.postComments.innerHTML = ''
            const postAllComments = Object.values(comments).filter((comment)=> comment.postId === select.value);
            console.log(postAllComments)
            postAllComments.forEach(element => {
                elementCreate('li', null, element.text, element.id, PostInfo.postComments)
                
            });
            
    })

    })
    })

    function elementCreate(type, classes, textContent, id, fatherName, value) {
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
        if (value) {
            element.value = value
        }
        if (fatherName) {
            fatherName.appendChild(element)
            
        }
        return element
    }
}


attachEvents();
