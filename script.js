'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

// then read text content property
// call addeventlistner in order to repsond to click event
const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// we want the closeModal function executed as soon as the 'click' event happens on the btnCloseModal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for loop which loops over node list which is basically
//an array holding all buttons
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  // CALLING the closeModal function
  // if the press key is escape and if the modal does not contain the hidden class
  // execute function to close modal
  // aggregating both if statements together
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    {
      closeModal();
    }
  }
});

// Below rewrote from line 19

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// Below rewrote from line 12

//   btnsOpenModal[i].addEventListener('click', function () {
//     console.log('Button Clicked');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
