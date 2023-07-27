function toggle() {
    const content = document.querySelector('#extra')
    console.log(document.querySelector('.button'))
    const buttonMore = document.querySelector('.button')
    if (buttonMore.textContent === 'More') {
        content.style.display = 'block'
        buttonMore.textContent = "Less"
    }else if(buttonMore.textContent ==='Less'){
        content.style.display = 'none'
        buttonMore.textContent = "More"

    }
}