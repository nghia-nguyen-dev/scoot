const nav = document.querySelector('nav')
const sideMenu = document.querySelector('.side-menu')
const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close')
const overlay = document.querySelector('.overlay')

// convert nodelist into arr in order to use array iteration methods later
const chevrons = [...document.querySelectorAll('.chevron')] 


// mobile nav functionality
nav.addEventListener('click',(e) => {
    sideMenu.classList.toggle('slide-out');
    hamburger.classList.toggle('hide-icon');
    close.classList.toggle('hide-icon');
    overlay.classList.toggle('on')
})

// FAQs section paragraph expand + chevron rotation
chevrons.forEach(chevron => {
    chevron.addEventListener('click', function() {
        const question = this.parentElement.parentElement
        question.classList.toggle('hidden')
        chevron.classList.toggle('up');
    })
})