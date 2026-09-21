'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// This querySelectorAll selects the element that are having the same class name and store it in linkedList
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
        // Instead of accessing element and style it using css we use classnames to easily accessible for multiple elements
        // modal.style.display = 'block';

        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', openModal);
}



// Here in the below two event listener the functions are same so instead of rewritting it we declare a function as a function expression and declare it as an argument in eventhandler
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);