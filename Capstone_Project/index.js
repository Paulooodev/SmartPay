let animationOne = document.querySelectorAll('section');
window.onscroll = () => {
    animationOne.forEach(sec => {
        let top = window.scrollX;
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    })
}

/*
* HAMBURGER AND NAVBAR JS.
*/

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




