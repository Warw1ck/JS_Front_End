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