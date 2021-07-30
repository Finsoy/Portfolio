// Burger menu
const burgerMenu = document.querySelector('.burger-icon');
if (burgerMenu) {
  const menuBody = document.querySelector('.header__wrapper')
  burgerMenu.addEventListener('click',function(e) {
    document.body.classList.toggle('lock')
    burgerMenu.classList.toggle('active')
    menuBody.classList.toggle('active')
  })
}