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

const cards = [
    {
        photo: '../../assets/images/Rectangle 5.jpg',
        title: {
            first: 'giant Pandas',
            second: 'Native to Southwest China',
        },
        food: '../../assets/icons/banana-bamboo_icon.svg',
    },
    {
        photo: '../../assets/images/Rectangle 6.jpg',
        title: {
            first: 'Eagles',
            second: 'Native to South America',
        },
        food: '../../assets/icons/meet-fish_icon.svg',
    },
    {
        photo: '../../assets/images/Rectangle 7.jpg',
        title: {
            first: 'Gorillas',
            second: 'Native to Congo',
        },
        food: '../../assets/icons/banana-bamboo_icon.svg',
    },
    {
        photo: '../../assets/images/Rectangle 8.png',
        title: {
            first: 'Two-toed Sloth',
            second: 'Mesoamerica, South America',
        },
        food: '../../assets/icons/banana-bamboo_icon.svg',
    },
    {
        photo: '../../assets/images/Rectangle 9.png',
        title: {
            first: 'cheetahs',
            second: 'Native to Africa',
        },
        food: '../../assets/icons/meet-fish_icon.svg',
    },
    {
        photo: '../../assets/images/Penguins.png',
        title: {
            first: 'Penguins',
            second: 'Native to Antarctica',
        },
        food: '../../assets/icons/meet-fish_icon.svg',
    },
];

const testimonialsCards = document.querySelectorAll('.testimonials-card');
for (let card of testimonialsCards) {
    card.addEventListener('click', showFullCard);
    card.querySelector('.popover-close').addEventListener('click', hideFullCard);
}

const testimonialsList = document.querySelector('.testimonials ul');
const testimonialsInput = document.querySelector('.slidecontainer .slider');
testimonialsInput.addEventListener('input', handleInput);
