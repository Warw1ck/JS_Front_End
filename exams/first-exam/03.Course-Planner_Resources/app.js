const formElements = {
    title: document.querySelector('#course-name'),
    type: document.querySelector('#course-type'),
    description: document.querySelector('#description'),
    teacher: document.querySelector('#teacher-name'),
    'add-Btn': document.querySelector('#add-course'),
    'edit-Btn': document.querySelector('#edit-course'),

}

sectionElements = {
    loadBtn: document.querySelector('#load-course'),
    list: document.querySelector('#list')

}

formElements["add-Btn"].addEventListener('click', addCourse)
function addCourse() {
    const title = formElements.title.value;
    const description = formElements.description.value;
    const teacher = formElements.teacher.value;
    const type = formElements.type.value;
  
    fetch("http://localhost:3030/jsonstore/tasks/", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        teacher,
        type,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
}

sectionElements.loadBtn.addEventListener('click', loadCourses)
function loadCourses() {
    sectionElements.list.innerHTML = '';
  
    fetch('http://localhost:3030/jsonstore/tasks/')
      .then((res) => res.json()) // Convert the response to JSON
      .then((coursesData) => {
        console.log(coursesData);
        Object.entries(coursesData).forEach(([key, value]) => {
            console.log(key)
            const container = elementCreate('div', ['container']);
            elementCreate('h2', null, value.title, null, container);
            elementCreate('h3', null, value.teacher, null, container);
            elementCreate('h3', null, value.type, null, container);
            elementCreate('h4', null, value.description, null, container);
            const editBtn = elementCreate('button', ['edit-btn'], 'Edit Course', null, container);
            editBtn.setAttribute("data-id", key);
            const finishBtn = elementCreate('button', ['finish-btn'], 'Finish Course', null, container);
            finishBtn.setAttribute("data-id", key);
            sectionElements.list.appendChild(container);
            editBtn.addEventListener('click', editCourseShow)
            finishBtn.addEventListener('click', finishCourse)

        });
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
      });
}
function finishCourse(e) {
    const courseId = e.target.getAttribute("data-id");
    fetch(`http://localhost:3030/jsonstore/tasks/${courseId}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      loadCourses(); // Refresh the list of courses after deletion
    })
    .catch((error) => {
      console.error("Error deleting course:", error);
    });

}
let courseId;
function editCourseShow(e) {
    courseId = e.target.getAttribute("data-id");

    fetch(`http://localhost:3030/jsonstore/tasks/${courseId}`)
    .then((res) => res.json()) // Add .json() to parse the response data
    .then((courseData) => {
      formElements.title.value = courseData.title;
      formElements.description.value = courseData.description;
      formElements.teacher.value = courseData.teacher;
      formElements.type.value = courseData.type;
      formElements["add-Btn"].disabled = true; // Fix typo, should be disabled
      formElements["edit-Btn"].disabled = false; // Fix typo, should be disabled
      
      
    })
    .catch((error) => {
      console.error("Error fetching course details:", error);
    });
    
}
formElements["edit-Btn"].addEventListener('click', editCourse)
function editCourse() {
  fetch(`http://localhost:3030/jsonstore/tasks/${courseId}`, {
    method: "PUT",
    body: JSON.stringify({
      title: formElements.title.value,
      description: formElements.description.value,
      teacher: formElements.teacher.value,
      type: formElements.type.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Course updated:", data);
      formElements.title.value = "";
      formElements.description.value = "";
      formElements.teacher.value = "";
      formElements.type.value = "";
      formElements["add-Btn"].disabled = false;
      formElements["edit-Btn"].disabled = true;
      loadCourses(); // Refresh the list of courses after editing
    })
    .catch((error) => {
      console.error("Error editing course:", error);
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
        textContent.setAttribute("id", id)
        
    }
    if (fatherName) {
        fatherName.appendChild(element)


    }
    return element
}