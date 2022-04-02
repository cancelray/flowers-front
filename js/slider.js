"use strict";

const sliderMove = (click) => {
    let target = click.target;
    if(target.classList.contains('disable')) {
        return;
    }
    if(target.classList.contains('slider-right')) {
        transformSlider -= 275;
        currentIndex++;
        sliderTrack.style.transform=`translateX(${transformSlider}px)`;
        if(prevArrow.classList.contains('disable')) {
            prevArrow.classList.remove('disable');
        }
        if(picsArr[currentIndex + 1] === picsArr[length - 1]) {
            nextArrow.classList.add('disable');
        }
    }
    if(target.classList.contains('slider-left')) {
        transformSlider += 275;
        currentIndex--;
        sliderTrack.style.transform=`translateX(${transformSlider}px)`;
        if(nextArrow.classList.contains('disable')) {
            nextArrow.classList.remove('disable');
        }
        if(picsArr[currentIndex] === picsArr[0]) {
            prevArrow.classList.add('disable');
        }
    }
}
const picsArr = document.querySelectorAll('.slider-img');
const prevArrow = document.querySelector('.slider-left');
const nextArrow = document.querySelector('.slider-right');
const sliderTrack = document.querySelector('.slider-track');
let transformSlider = 0;
let currentIndex = 1;
nextArrow.addEventListener('click', sliderMove);
prevArrow.addEventListener('click', sliderMove);