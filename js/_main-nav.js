// const mainNavLinks = document.querySelectorAll('.main-nav__link');
const mainNavCheckbox = document.querySelector('.main-nav-toggle');
console.log('🚀 ~ mainNavCheckbox', mainNavCheckbox);
// const hamburgerButton = document.querySelector('.main-header__hamburger-button-container')

// mainNavLinks.forEach(link => {
//   link.addEventListener('click', e => {
//     if (getComputedStyle(hamburgerButton).display == "none" ) return;

//   })
// });

document.addEventListener('click', e => {
  if (
      e.target.classList.contains('main-nav__link') ||
      e.target.classList.contains('main-header__contact-link') ||
      e.target.classList.contains('main-header__title-link')
    ) {
    mainNavCheckbox.checked = false;
    }
})