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

function handleInput() {
    const screenWidth = window.screen.width;
    const cardWidth = screenWidth >= 1600 ? 297 : 321;
    const value = testimonialsInput.value;
    testimonialsList.style.transform = `translateX(-${value*(cardWidth)}px)`;
}

const testimonialsCards = document.querySelectorAll('.testimonials-card');
for (let card of testimonialsCards) {
    card.addEventListener('click', showFullCard);
    card.querySelector('.popover-close').addEventListener('click', hideFullCard);
}

const testimonialsList = document.querySelector('.testimonials ul');
const testimonialsInput = document.querySelector('.slidecontainer .slider');
testimonialsInput.addEventListener('input', handleInput);
