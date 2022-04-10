"use strict";

const showBurger = () => {
    if (!cart.classList.contains('cart-hide')) {
        cart.classList.add('cart-hide');
        page.classList.remove('blur');
    }

    if (burger.classList.contains('hide')) {
        burger.classList.remove('hide');
        mobileMenu.classList.add('active');
        body.classList.add('lock-scroll');
    } else if (!burger.classList.contains('hide')) {
        burger.classList.add('hide');
        mobileMenu.classList.remove('active');
        body.classList.remove('lock-scroll');
    }
}

const mobileMenu = document.querySelector('.mobile-menu');
const burger = document.querySelector('.mobile-menu-burger');
const body = document.querySelector('body');



mobileMenu.addEventListener('click', showBurger);