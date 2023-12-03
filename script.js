let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
setTimeout(() => {
    document.querySelector('.preloader').style.display ="none"
}, 2000);



