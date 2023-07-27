function addItem() {
    const menu = document.querySelector('#menu')
    const textInput = document.querySelector('#newItemText')
    const valueInput = document.querySelector('#newItemValue')
    if (textInput.value && valueInput.value) {
        menu.innerHTML+=`<option value="${valueInput.value}">${textInput.value}</option>`    
        textInput.value = ''
        valueInput.value = ''
    }
}