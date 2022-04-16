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

const showCart = () => {
    if (!burger.classList.contains('hide')) {
        burger.classList.add('hide');
        mobileMenu.classList.remove('active');
        body.classList.remove('lock-scroll');
    }

    if (cart.classList.contains('cart-hide')) {
        cart.classList.remove('cart-hide');
        page.classList.add('blur');
    } else if (!cart.classList.contains('cart-hide')) {
        cart.classList.add('cart-hide');
        page.classList.remove('blur');
    }
}

const closeCart = () => {
    cart.classList.add('cart-hide');
    page.classList.remove('blur');
}

const closeOnClick = (click)  => {
    if (click.target !== cartIcon && !cart.classList.contains('cart-hide')) {
        cart.classList.add('cart-hide');
        page.classList.remove('blur');
    }
}

const cartIcon = document.querySelectorAll('.cart-icon');
const cart = document.querySelector('.cart-wrapper');
const page = document.querySelector('.landing-page');
const closeCartBtn = document.querySelector('.close-cart'); 

cartIcon.forEach((elem) => {
    elem.addEventListener('click', showCart);
});
closeCartBtn.addEventListener('click', closeCart);
page.addEventListener('click', closeOnClick);