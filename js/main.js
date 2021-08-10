const navActive = document.querySelector('#boton');
const nav = document.querySelector('#nav');
navActive.addEventListener('click', e => {
    nav.classList.toggle('nav-active');

    if (nav.classList.contains("nav-active")) {
        navActive.setAttribute("arial-label", "abrir menu");
    } else {
        navActive.setAttribute("arial-label", "cerrar menu");
    }
});