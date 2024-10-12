const toggleButtonElement = document.querySelector('.header__button-toggle');
const menuElement = document.querySelector('.header__nav');

toggleButtonElement.addEventListener('click', () => {
  toggleButtonElement.classList.toggle('header__button-toggle--open');
  menuElement.classList.toggle('header__nav--opened');
});


const nextButton = document.querySelector('.slider__button--next');
const prevButton = document.querySelector('.slider__button--prev');
const sliderItemsTags = document.querySelectorAll('.slider__item');
const bullets = document.querySelectorAll('.slider__pagination-button');
const slider = document.querySelector('.slider');
let currentIndex = 0; // Текущий индекс, инициализация с 0

const renderActiveScreen = () => {
  sliderItemsTags.forEach((item) => item.classList.remove('slider__item--current'));

  sliderItemsTags[currentIndex].classList.add('slider__item--current');

  sliderItemsTags.forEach((item, i) => {
    item.style.order = i >= currentIndex ? i - currentIndex : sliderItemsTags.length + (i - currentIndex);
  });


  bullets.forEach((bullet, i) => {
    bullet.classList.remove('slider__pagination-button--current');
    if (i === currentIndex) {
      bullet.classList.add('slider__pagination-button--current');
    }
  });
};

nextButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (currentIndex < sliderItemsTags.length - 1) {
    currentIndex++;
    renderActiveScreen();
  }
});

prevButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (currentIndex > 0) {
    currentIndex--;
    renderActiveScreen();
  }
});

bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', (evt) => {
    evt.preventDefault();
    currentIndex = index;
    renderActiveScreen();
  });
});

// Инициализация, чтобы отобразить первый экран
renderActiveScreen();

