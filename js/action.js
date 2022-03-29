const chooseDish = document.querySelectorAll('.switch');

Array.from(chooseDish).forEach(elem => elem.onclick = () => { 
    if(elem.classList.contains('choose-dish')) {
        elem.classList.remove('choose-dish');
        elem.classList.add('chosen-dish');

        elem.childNodes[1].style.display = 'none';
        elem.childNodes[5].style.display = 'flex';
        elem.childNodes[3].classList.remove('choose-text');
        elem.childNodes[3].classList.add('chosen-text');
    } else {
        elem.classList.remove('chosen-dish');
        elem.classList.add('choose-dish');

        elem.childNodes[1].style.display = 'flex';
        elem.childNodes[5].style.display = 'none';
        elem.childNodes[3].classList.remove('chosne-text');
        elem.childNodes[3].classList.add('choose-text');
    }
 });