let burger = document.querySelector(".burger");
let main = document.querySelector(".header__wrapper");
let header__block__img = document.querySelector('.header__wrapper__img');
let close = document.querySelector('.header__wrapper__close');

burger.onclick = () => {
    burger.classList.toggle('active');
    main.classList.toggle('active');
    header__block__img.classList.toggle('active');
    header__block__img.nextElementSibling.classList.toggle('active');
    header__block__img.nextElementSibling.nextElementSibling.classList.toggle('active');
    close.classList.toggle('active');
}