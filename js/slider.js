"use strict";

const sliderMove = (click) => {
    let target = click.target;
    if(target.classList.contains('disable')) {
        return;
    }
    if(target.classList.contains('slider-right')) {
        transformSlider -= deltaTarnsform;
        sliderTrack.style.transform=`translateX(${transformSlider}px)`;
        if(prevArrow.classList.contains('disable')) {
            prevArrow.classList.remove('disable');
        }
        if(Math.abs(transformSlider) === maxTransform) {
            nextArrow.classList.add('disable');
        }
    }
    if(target.classList.contains('slider-left')) {
        transformSlider += deltaTarnsform;
        sliderTrack.style.transform=`translateX(${transformSlider}px)`;
        if(nextArrow.classList.contains('disable')) {
            nextArrow.classList.remove('disable');
        }
        if(transformSlider === 0) {
            prevArrow.classList.add('disable');
        }
    }
}

const picsArr = document.querySelectorAll('.slider-img');
const prevArrow = document.querySelector('.slider-left');
const nextArrow = document.querySelector('.slider-right');
const sliderTrack = document.querySelector('.slider-track');
const deltaTarnsform = 275;
let transformSlider = 0;
let maxTransform = 0;

if (document.documentElement.clientWidth > 993) {
    maxTransform = (picsArr.length - 3) * deltaTarnsform;
}
if (document.documentElement.clientWidth < 993 && document.documentElement.clientWidth > 769) {
    maxTransform = (picsArr.length - 2) * deltaTarnsform;
}

nextArrow.addEventListener('click', sliderMove);
prevArrow.addEventListener('click', sliderMove);