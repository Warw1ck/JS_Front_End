function lockedProfile() {
    const profiles = document.querySelectorAll('.profile')
    for (let index = 0; index < profiles.length; index++) {
        const profile = profiles[index];
        const buttonShow = profile.querySelector('button')
        const hidden = profile.querySelector(`#user${index+1}HiddenFields`)
        const radioLock = document.querySelector(`input[name="user${index+1}Locked"][value="lock"]`);
        const radioUnLock = document.querySelector(`input[name="user${index+1}Locked"][value="unlock"]`);

        const radioButtons = document.querySelectorAll(`input[name="user${index+1}Locked"]`);
        console.log(radioButtons)
        radioButtons.forEach(element => {
            element.addEventListener('click', () => {
                if (element.value === 'lock') {        
                    hidden.style.display = 'none'
                    buttonShow.textContent = 'Show more'
                
                }else if(element.value === 'unlock'){
                    hidden.style.display = 'inline'
                        buttonShow.innerText = 'Hide it'
                }
                
    
              }, true);
        });
        
        buttonShow.addEventListener('click', () => {
            if (buttonShow.textContent === 'Show more') {
                hidden.style.display = 'inline'
                buttonShow.innerText = 'Hide it'
                radioUnLock.checked = true

            } else if(buttonShow.textContent === 'Hide it') {
                hidden.style.display = 'none'
                buttonShow.textContent = 'Show more'
                radioLock.checked = true
                
            }
            

          }, true);
    }
}