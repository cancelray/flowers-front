"use strict";

const openFilter = (click) => {
    let target = click.target;
    if (target.classList.contains('mobile-filter-header') && filters.classList.contains('display-none')) {
        filters.classList.remove('display-none');
        header.classList.add('active');
    } else if (target.classList.contains('mobile-filter-header') && !filters.classList.contains('display-none')) {
        filters.classList.add('display-none');
        header.classList.remove('active');
    }
}

const header = document.querySelector('.mobile-filter-header');
const filters = document.querySelector('.filter-form');

header.addEventListener('click', openFilter);
