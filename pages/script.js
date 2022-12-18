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

function showFullCard(e) {
    const screenWidth = window.screen.width;
    if (screenWidth <= 640) {
        const popoverCard = e.currentTarget.querySelector('.popover-testimonial');
        overlay.classList.add('active');
        popoverCard.classList.add('active');
        overlay.addEventListener('click', hideFullCard);
    }
}

function hideFullCard(e) {
    e.stopImmediatePropagation();
    const popoverCard = document.querySelector('.popover-testimonial.active');
    popoverCard.classList.remove('active');
    overlay.classList.remove('active');
    overlay.removeEventListener('click', hideFullCard);
}

const btnBurgerMenu = document.querySelector('.header-burger-btn');
const menuBurger = document.querySelector(".main-menu.bur-menu");
const overlay = document.querySelector(".body-overlay");
const burgerClose = document.querySelector('.main-menu .bur-close');
btnBurgerMenu.addEventListener('click', openBurgerMenu);
burgerClose.addEventListener('click', closeBurgerMenu);

const testimonialsCards = document.querySelectorAll('.testimonials-card');
for (let card of testimonialsCards) {
    card.addEventListener('click', showFullCard);
    card.querySelector('.popover-close').addEventListener('click', hideFullCard);
}

