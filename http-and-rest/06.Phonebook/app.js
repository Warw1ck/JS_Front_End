function attachEvents() {
    const personForm = {
        person: document.querySelector('#person'),
        phone: document.querySelector('#phone')

    }
    const buttonsElements = {
        addBtn: document.querySelector('#btnCreate'),
        loadBtn: document.querySelector('#btnLoad')

    }

    buttonsElements.loadBtn.addEventListener('click', LoadPage)
    function LoadPage(e) {
        fetch('http://localhost:3030/jsonstore/phonebook')
        .then((res)=>res.json())
        .then((phoneBookData)=>{
            document.querySelector('#phonebook').innerHTML = ''
            Object.entries(phoneBookData).forEach(([key, element]) => {
                const phone = elementCreate('li', null, `${element.person}: ${element.phone}`)
                const deleteBtn = elementCreate('button', null, 'Delete', null, phone)
                document.querySelector('#phonebook').appendChild(phone)
                deleteBtn.addEventListener('click', (e)=>{

                    fetch(`http://localhost:3030/jsonstore/phonebook/${key}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-type': 'application/json'
                        }
                    }).then((res)=> res.json)
                    .then((deletePhoneData)=>{
                        
                        e.target.parentElement.remove()

                    })
                })
                
            });
        })
    
        
    }
    buttonsElements.addBtn.addEventListener('click', (e)=>{
        if (personForm.person.value && personForm.phone.value) {
            fetch("http://localhost:3030/jsonstore/phonebook", {
     
        // Adding method type
        method: "POST",
        
        // Adding body or contents to send
        body: JSON.stringify({
            person: personForm.person.value,
            phone: personForm.phone.value
        }),
        
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    
    // Converting to JSON
    .then(response => response.json())
    
    // Displaying results to console
    .then((newPhoneData)=>{
        personForm.person.value= ''
        personForm.phone.value= ''
        LoadPage(e)
    });
            
        }
        
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