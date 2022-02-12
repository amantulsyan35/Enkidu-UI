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

//TOAST
const toastBaseline = document.querySelector('.toast-baseline');
const toastLeading = document.querySelector('.toast-leading');
const toastStacked = document.querySelector('.toast-stack');
const toastBtn = document.querySelector('.toast-button');

toastBtn.addEventListener('click', (e) => {
  let selectedClass = e.target.innerHTML;

  if (selectedClass === 'baseline') {
    toastBaseline.style.display = 'flex';

    setTimeout(() => {
      toastBaseline.style.display = 'none';
    }, 5000);
  } else if (selectedClass === 'leading') {
    toastLeading.style.display = 'flex';
    setTimeout(() => {
      toastLeading.style.display = 'none';
    }, 5000);
  } else if (selectedClass === 'stacked') {
    toastStacked.style.display = 'flex';
    setTimeout(() => {
      toastStacked.style.display = 'none';
    }, 5000);
  }
});

const closeBaseline = document.querySelector('.toast-baseline-close');
const closeLeading = document.querySelector('.toast-leading-close');
const closeStacked = document.querySelector('.toast-stack-close');

closeBaseline.addEventListener('click', () => {
  toastBaseline.style.display = 'none';
});

closeLeading.addEventListener('click', () => {
  toastLeading.style.display = 'none';
});

closeStacked.addEventListener('click', () => {
  toastStacked.style.display = 'none';
});
