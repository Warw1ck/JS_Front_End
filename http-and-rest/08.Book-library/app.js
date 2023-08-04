function attachEvents() {
  let formAction = 'FORM'
  let bookId;
  const bookForm = {
    title: document.querySelectorAll('#form input')[0],
    author: document.querySelectorAll('#form input')[1]

  }
  const pageButtons = {
    submitBtn: document.querySelector('#form button'),
    loadBtn: document.querySelector('#loadBooks'),

  }
  
  pageButtons.loadBtn.addEventListener('click', loadBooks)
  function loadBooks(e) {

    fetch('http://localhost:3030/jsonstore/collections/books')
    .then((res)=>res.json())
    .then((booksData)=>{
      document.querySelector('table tbody').innerHTML = ''
      Object.entries(booksData).forEach(([key, book]) => {
        const container = elementCreate('tr')
        elementCreate('td', null, book.title, null, container)
        elementCreate('td', null, book.author, null, container)
        const buttonContainer = elementCreate('td')
        const editBtn = elementCreate('button', null, 'Edit', null, buttonContainer)
        const deleteBtn = elementCreate('button', null, 'Delete', null, buttonContainer)
        container.appendChild(buttonContainer)
        document.querySelector('table tbody').appendChild(container)
        editBtn.addEventListener('click', (e)=>{
          bookId = key

          formAction = 'Edit FORM'
          document.querySelector('#form h3').textContent = formAction
          pageButtons.submitBtn.textContent = 'Save'
          bookForm.author.value = book.author
          bookForm.title.value = book.title
        })
        deleteBtn.addEventListener('click', (e) => {
          fetch(`http://localhost:3030/jsonstore/collections/books/${key}`, {
              method: 'DELETE',
              headers: {
                  'Content-type': 'application/json'
              }
          })
          .then((res) => res.json())
          .then((deletedBook) => {
              // After successful delete, call loadBooks() to reload the books and update the table.
              loadBooks();
          });
      });
      
        


        
      });
    })
    
  }
  pageButtons.submitBtn.addEventListener('click', submitBook)
  function submitBook(e) {
    if (formAction === 'FORM') {
      fetch('http://localhost:3030/jsonstore/collections/books', {
     
      // Adding method type
      method: "POST",
      
      // Adding body or contents to send
      body: JSON.stringify({
          title: bookForm.title.value,
          author: bookForm.author.value
      }),
      
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
      })
    
    // Converting to JSON
    .then(response => response.json())
    
    // Displaying results to console
    .then((newBookData)=>{
      loadBooks(e)
      clearForm()
    });
      
    }else if(formAction === 'Edit FORM'){
      console.log(bookId)
      fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`, {
     
      // Adding method type
      method: "PUT",
      
      // Adding body or contents to send
      body: JSON.stringify({
          author: bookForm.author.value,
          title: bookForm.title.value
          
      }),
      
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
      })
      .then(response => response.json())
      
      // Displaying results to console
      .then((newBookData)=>{
        bookId = ''
        formAction = 'FORM'
        document.querySelector('#form h3').textContent = formAction
        pageButtons.submitBtn.textContent = 'Submit'
        loadBooks(e)
        clearForm()
      });

    }
    
  }
  function clearForm() {
    Object.values(bookForm).forEach(element => {
      element.value = ''
      
    });
    
  }

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