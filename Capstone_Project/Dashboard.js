let menu = document.getElementById('JS_menuBar');
let navbar = document.querySelector('.navbar');

function displayNavbar() {
    navbar.style.transform = 'translateX(0)'
}

let toggleDisplay = menu.classList;

menu.addEventListener('click', ()=> {
    let displayNav = toggleDisplay.toggle('is-active')
    if (displayNav) {
        displayNavbar()
    } else {
        navbar.style.transform = '';
    }
})