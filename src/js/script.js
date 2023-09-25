const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');

const burger = document.querySelector('.navigation');
const burgerMenu = document.querySelector('.burger-menu--is-active');



const btnOpenBurgerMenu = document.querySelector('.navigation__burger');
const btnCloseBurgerMenu = document.querySelector('.burger-menu__btn-close');



btnOpenBurgerMenu.addEventListener('click', openBurgerMenu);
btnCloseBurgerMenu.addEventListener('click', closeBurgerMenu);

function openBurgerMenu() {
    header.style.display = 'none';
    main.style.display = 'none';
    footer.style.display = 'none';
    burgerMenu.style.display = 'flex';
}

function closeBurgerMenu() {
    header.style.display = 'flex';
    main.style.display = 'flex';
    footer.style.display = 'flex';
    burgerMenu.style.display = 'none';
}