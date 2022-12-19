function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
}

function isEqualSlides(next, previous) {
    let count = 0;
    for (let index = 0; index < next.length; index++) {
       if (next[index].title.first === previous[index].title.first) {
           count +=1;
       }
    }
    return count === next.length;
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

function handleInput() {
    const screenWidth = window.screen.width;
    const cardWidth = screenWidth >= 1600 ? 297 : 321;
    const value = testimonialsInput.value;
    testimonialsList.style.transform = `translateX(-${value*(cardWidth)}px)`;
}

function startAnimation() {
    isStartAnimation = true;
    favoriteLeft.disabled = true;
    favoriteRight.disabled = true;
}

function stopAnimation() {
    isStartAnimation = false;
    favoriteLeft.disabled = false;
    favoriteRight.disabled = false;
}

function createNextSlide() {
    const slide = document.createElement('ul');
    slide.classList.add('animals-list');
    const screenWidth = window.screen.width;
    const maxCards = screenWidth >= 999 ? 6 : 4;

    do {
        shuffleArray(cards);
    } while (isEqualSlides(cards.slice(0, maxCards), prevCards.slice(0, maxCards)));

    prevCards = Object.assign([], cards);

    const listCards = cards.map(({ photo, title, food })=> {
       const li = document.createElement('li');

       const imgWrapper = document.createElement('div');
       imgWrapper.classList.add('img-wrapper');
       const animalPhoto = document.createElement('img');
       animalPhoto.src = photo;
       animalPhoto.alt = title.first;
       imgWrapper.append(animalPhoto);
       const overlay = document.createElement('div');
       overlay.classList.add('overlay');
       imgWrapper.append(overlay);
       li.append(imgWrapper);

       const cardContent = document.createElement('div');
       cardContent.classList.add('card-content');
       const titleElement = document.createElement('div');
       titleElement.classList.add('title');
       const firstTitle = document.createElement('span');
       firstTitle.innerText = title.first;
       firstTitle.classList.add('uppercase', 'first-line');
       const secondTitle = document.createElement('span');
       secondTitle.classList.add('second-line');
       secondTitle.innerText = title.second;
       titleElement.append(firstTitle, secondTitle);
       const img = document.createElement('img');
       img.src = food;
       img.alt = 'icon food';
       cardContent.append(titleElement, img);
       li.append(cardContent);

       return li;
    });

    slide.append(...listCards);
    slide.style.opacity = 0;
    slide.style.position = 'absolute';
    slide.style.top = 0;
    slide.style.transition = 'opacity 0.7s';
    slide.addEventListener('transitionend', stopAnimation);


    return slide;
}

function switchNextSlide() {
    if (!isStartAnimation) {
        startAnimation();
        const nextSlide = createNextSlide();
        favoriteContent.append(nextSlide);
        setTimeout(() => nextSlide.style.opacity = 1, 500);
        const prevSlide = nextSlide.previousElementSibling;
        if (prevSlide.style.position === 'absolute') {
            prevSlide.remove();
        }
    }
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

let isStartAnimation = false;
let prevCards = Object.assign([], cards);

const favoriteContent = document.querySelector('.favorite .content');
const favoriteLeft = document.querySelector('.favorite .arrow.left');
const favoriteRight = document.querySelector('.favorite .arrow.right');
favoriteLeft.addEventListener('click', switchNextSlide);
favoriteRight.addEventListener('click',switchNextSlide);

const testimonialsCards = document.querySelectorAll('.testimonials-card');
for (let card of testimonialsCards) {
    card.addEventListener('click', showFullCard);
    card.querySelector('.popover-close').addEventListener('click', hideFullCard);
}

const testimonialsList = document.querySelector('.testimonials ul');
const testimonialsInput = document.querySelector('.slidecontainer .slider');
testimonialsInput.addEventListener('input', handleInput);
