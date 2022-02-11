//Modal
const modalCTA = document.querySelector('#modal-CTA');
const modalComponent = document.querySelector('#modal-component');
const modalClose = document.querySelector('#modal-close');
const modalBack = document.querySelector('#modal-back');

modalCTA.addEventListener('click', () => {
  modalComponent.classList.add('active');
  document.body.style.overflow = 'hidden';
});

modalClose.addEventListener('click', () => {
  modalComponent.classList.remove('active');
  document.body.style.overflow = 'visible';
});

modalBack.addEventListener('click', () => {
  modalComponent.classList.remove('active');
  document.body.style.overflow = 'visible';
});

//Rating
