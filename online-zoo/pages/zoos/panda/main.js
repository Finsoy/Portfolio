// Burger menu
const burgerMenu = document.querySelector('.burger-icon');
if (burgerMenu) {
  const menuBody = document.querySelector('.header__wrapper');
  burgerMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    burgerMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}

// cams videos spoiler
const camsTitle = document.querySelector('.cams__title');
const camsVideo = document.querySelector('.cams__videos');
const camsSliderButtons = document.querySelector('.slider__buttons');
camsTitle.addEventListener('click', () => {
  if (camsVideo.style.display === 'flex') {
    camsTitle.classList.add('disable');
    camsVideo.style.display = 'none';
    camsSliderButtons.style.display = 'none';
  } else {
    camsTitle.classList.remove('disable');
    camsVideo.style.display = 'flex';
    camsSliderButtons.style.display = 'block';
  }
});

//  fact spoiler

const tabHeader = document.querySelectorAll('.tab__header');
const minusBtn = document.querySelectorAll('.minus-btn');
const plusBtn = document.querySelectorAll('.plus-btn');
const factsTitle = document.querySelectorAll('.tab__title');
const hiddenDetailsLink = document.querySelector('.hidden__details-link');
const factsHr = document.querySelectorAll('.facts hr');

for (let i = 0; i < tabHeader.length; i++) {
  tabHeader[i].addEventListener('click', (e) => {
    let contentText = tabHeader[i].nextElementSibling;
    if (contentText.style.maxHeight) {
      contentText.style.maxHeight = null;
      contentText.classList.add('disable');
      factsTitle[i].classList.remove('active');
      hiddenDetailsLink.classList.remove('active');
      factsHr[i].classList.remove('active');
      minusBtn[i].style.display = 'none';
      plusBtn[i].style.display = 'block';
    } else {
      contentText.classList.remove('disable');
      factsTitle[i].classList.add('active');
      hiddenDetailsLink.classList.add('active');
      factsHr[i].classList.add('active');
      contentText.style.maxHeight = contentText.scrollHeight + 'px';
      minusBtn[i].style.display = 'block';
      plusBtn[i].style.display = 'none';
    }
  });
}

// Карусель в блоке other cams.

const camsVideos = document.querySelector('.cams__videos');
const mainVideo = document.querySelector('.main__video iframe');
const videoItems = document.querySelectorAll('.video__item');
const videoItemsIframes = document.querySelectorAll('.video__item iframe');
const hiddenItems = document.querySelectorAll('.video__item .hidden__item');
let mainVideoSrc = mainVideo.src;

camsVideos.addEventListener('click', (e) => {
  videoItems.forEach((item, index) => {
    if (e.target === item) {
      mainVideo.src = videoItemsIframes[index].src;
      videoItemsIframes[index].src = mainVideoSrc;
      mainVideoSrc = mainVideo.src;
    }
  });
});
