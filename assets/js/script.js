function openBurgerMenu() {
    overlay.classList.add('active');
    menuBurger.classList.add('active');
    overlay.addEventListener('click', closeBurgerMenu);
}

function closeBurgerMenu() {
    overlay.classList.remove('active');
    menuBurger.classList.remove('active');
    overlay.removeEventListener('click', closeBurgerMenu);
}

const btnBurgerMenu = document.querySelector('.header-burger-btn');
const menuBurger = document.querySelector(".main-menu.bur-menu");
const overlay = document.querySelector(".body-overlay");
const burgerClose = document.querySelector('.main-menu .bur-close');
btnBurgerMenu.addEventListener('click', openBurgerMenu);
burgerClose.addEventListener('click', closeBurgerMenu);
