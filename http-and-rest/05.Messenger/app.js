function attachEvents() {
    const personForm = {
        name: document.querySelectorAll('#controls input')[0],
        message: document.querySelectorAll('#controls input')[1]

    }
    
    document.querySelector('#refresh').addEventListener('click', (e)=>{
        document.querySelector('#messages').value = ''

        fetch('http://localhost:3030/jsonstore/messenger')
        .then((res)=>res.json())
        .then((messengerData)=>{
            Object.values(messengerData).forEach(element => {
                document.querySelector('#messages').value +=  `${element.author}: ${element.content}\n`
                
            });
        })
    })
    document.querySelector('#submit').addEventListener('click', (e)=>{
        fetch("http://localhost:3030/jsonstore/messenger", {
     
        // Adding method type
        method: "POST",
        
        // Adding body or contents to send
        body: JSON.stringify({
            author: personForm.name.value,
            content: personForm.message.value
        }),
        
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })// Converting to JSON
        .then(response => response.json())
         
        // Displaying results to console
        .then((data)=>{
            personForm.name.value = ''
            personForm.message.value = ''
        }

        );
    })
}

attachEvents();