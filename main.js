const nav = document.querySelector('nav')
const sideMenu = document.querySelector('.side-menu')
const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close')
const overlay = document.querySelector('.overlay')

nav.addEventListener('click',(e) => {
    sideMenu.classList.toggle('slide-out');
    hamburger.classList.toggle('hide-icon');
    close.classList.toggle('hide-icon');
    overlay.classList.toggle('on')
})