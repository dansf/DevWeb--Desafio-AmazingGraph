const navMenu = document.getElementById('nav-menu'),
    Open = document.getElementById('nav-toggle'),
    Close = document.getElementById('nav-close'),
    navLink = document.querySelectorAll('.nav__link');

if(Open){
    Open.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

if(Close){
    Close.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

function linkAction() {
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));