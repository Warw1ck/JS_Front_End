function attachEvents() {
  const personForm = {
    firstName: document.querySelectorAll('#form .inputs input')[0],
    lastName: document.querySelectorAll('#form .inputs input')[1],
    facultyNumber: document.querySelectorAll('#form .inputs input')[2],
    grade: document.querySelectorAll('#form .inputs input')[3],


  }
  fetch('http://localhost:3030/jsonstore/collections/students')
  .then((res)=> res.json())
  .then((studentsData)=>{
    Object.values(studentsData).forEach(student => {
      const container = elementCreate('tr')
      elementCreate('th', null, student.firstName, null, container)
      elementCreate('th', null, student.lastName, null, container)
      elementCreate('th', null, student.facultyNumber, null, container)
      elementCreate('th', null, student.grade, null, container)
      document.querySelector('#results tbody').appendChild(container)
      
      
    });
  })

  document.querySelector('#submit').addEventListener('click', (e)=>{
    fetch('http://localhost:3030/jsonstore/collections/students', {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        firstName: personForm.firstName.value,
        lastName: personForm.lastName.value,
        facultyNumber: personForm.facultyNumber.value,
        grade: personForm.grade.value,

    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    
    // Converting to JSON
    .then(response => response.json())
    
    // Displaying results to console
    .then((student) => {
      const container = elementCreate('tr')
      elementCreate('th', null, student.firstName, null, container)
      elementCreate('th', null, student.lastName, null, container)
      elementCreate('th', null, student.facultyNumber, null, container)
      elementCreate('th', null, student.grade, null, container)
      document.querySelector('#results tbody').appendChild(container)

      Object.values(personForm).forEach(element => {
        element.value = ''
        
      });
    });
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