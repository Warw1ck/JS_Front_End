window.addEventListener('load', solve);

function solve() {
    let likes = 0
    const songForm = {
        genre: document.querySelector('#genre'),
        name: document.querySelector('#name'),
        author: document.querySelector('#author'),
        creationDate: document.querySelector('#date')
    };

    const pageButtons = {
        addBtn: document.querySelector('#add-btn')
    };

    pageButtons.addBtn.addEventListener('click', addSong);

    function addSong(event) {
        event.preventDefault();
        for (const element of Object.values(songForm)) {
            if (!element.value) { // Check for empty value using element.value
                return;
            }
        }
        const songContainer = elementCreate('div', ['hits-info']);
        const songImage = elementCreate('img', null, null, null, songContainer, "static/img/img.png");
        elementCreate('h2', null, `Genre: ${songForm.genre.value}`, null, songContainer);
        elementCreate('h2', null, `Name: ${songForm.name.value}`, null, songContainer);
        elementCreate('h2', null, `Author: ${songForm.author.value}`, null, songContainer);
        elementCreate('h3', null, `Date: ${songForm.creationDate.value}`, null, songContainer);
        const saveBtn = elementCreate('button', ['save-btn'], `Save song`, null, songContainer);
        const likeBtn = elementCreate('button', ['like-btn'], `Like song`, null, songContainer);
        const deleteBtn = elementCreate('button', ['delete-btn'], `Delete`, null, songContainer);
        
        const hitsContainer = document.querySelector('#all-hits .all-hits-container');
        hitsContainer.appendChild(songContainer);
        likeBtn.addEventListener('click', (e)=>{
            e.target.disabled = true;
            likes += 1
            document.querySelector('#total-likes .likes p').innerHTML = `Total Likes: ${likes}`
        })
        saveBtn.addEventListener('click', (e)=>{
            const saveContainer = e.target.parentElement
            saveContainer.querySelector('.save-btn').remove()
            saveContainer.querySelector('.like-btn').remove()
            document.querySelector('#saved-hits .saved-container').appendChild(saveContainer)


        })
        deleteBtn.addEventListener('click', (e)=>{
            e.target.parentElement.remove()
        })
        Object.values(songForm).forEach(element => {
            element.value = ''
            
        });
    }

    function elementCreate(type, classes, textContent, id, fatherElement, imgSrc) {
        const element = document.createElement(type);

        if (classes) {
            element.classList.add(...classes);
        }

        if (textContent) {
            element.textContent = textContent;
        }

        if (id) {
            element.setAttribute("id", id);
        }

        if (fatherElement) {
            fatherElement.appendChild(element);
        }

        if (imgSrc && type === 'img') {
            element.src = imgSrc;
        }

        return element;
    }
}
