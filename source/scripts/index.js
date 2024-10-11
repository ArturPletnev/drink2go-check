const toggleButtonElement = document.querySelector('.header__button-toggle');
const menuElement = document.querySelector('.header__nav');

toggleButtonElement.addEventListener('click', () => {
  toggleButtonElement.classList.toggle('header__button-toggle--open');
  menuElement.classList.toggle('header__nav--opened');
});
