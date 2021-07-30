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

//Profile pop-up

const headrUserIcon = document.querySelector('.header__user-icon');
const profileModal = document.querySelector('.login');
const loginBackBtn = document.querySelector('.login .header__back');

headrUserIcon.addEventListener('click', () => {
  profileModal.classList.add('login-active');
  document.body.classList.add('lock');
  document.body.classList.add('background');
});
loginBackBtn.addEventListener('click', () => {
  profileModal.classList.remove('login-active');
  document.body.classList.remove('lock');
  document.body.classList.remove('background');
});
profileModal.addEventListener('click', (e) => {
  if (e.target === profileModal) {
    profileModal.classList.remove('login-active');
    document.body.classList.remove('lock');
  }
});

// Feedback pop-up
const feedbackModal = document.querySelector('.feedback');
const feedbackOpenBtn = document.querySelector('.feedback__btn');
const feedbackSendBtn = document.querySelector('.feedback__send-btn');
const feedbackName = document.querySelector('.feedback #name');
const feedbackEmail = document.querySelector('.feedback #email');
const feedbackReview = document.querySelector('.feedback #review');

feedbackOpenBtn.addEventListener('click', () => {
  feedbackModal.classList.add('feedback-active');
  document.body.classList.add('lock');
});
feedbackModal.addEventListener('click', (e) => {
  if (e.target === feedbackModal) {
    feedbackModal.classList.remove('feedback-active');
    document.body.classList.remove('lock');
  }
});

const validate = () => {
  if (
    feedbackName.validity.valid &&
    feedbackReview.validity.valid &&
    feedbackEmail.validity.valid
  ) {
    feedbackSendBtn.classList.remove('disabled');
  } else {
    feedbackSendBtn.classList.add('disabled');
  }
};

feedbackName.addEventListener('input', () => {
  validate();
});
feedbackEmail.addEventListener('input', () => {
  validate();
});
feedbackReview.addEventListener('input', () => {
  validate();
});

// Slider pets in zoo

const petsPhotos = document.querySelector('.pets__photos'),
  petsRow = document.querySelectorAll('.pets__row'),
  photosItem = document.querySelector('.photos__item'),
  photosItemsRow1 = document.querySelectorAll('.row1 .photos__item'),
  photosItemsRow2 = document.querySelectorAll('.row2 .photos__item'),
  next = document.querySelector('.pets .next'),
  prev = document.querySelector('.pets .prev');

let petsRow1 = document.querySelector('.row1');
let petsRow2 = document.querySelector('.row2');

let widthItem = photosItem.offsetWidth;
let widthPetsRow = petsRow.offsetWidth;

let currentItem = 0;
let currentLastItem = 4;
window.addEventListener('resize', (e) => (widthItem = photosItem.offsetWidth));
let test = 0;

for (let i = 1; i <= 5; i++) {
  petsRow1.prepend(photosItemsRow1[photosItemsRow1.length - i].cloneNode(true));
  petsRow2.prepend(photosItemsRow2[photosItemsRow2.length - i].cloneNode(true));
  petsRow1.scrollBy((widthItem + 40) * i, 0);
  petsRow2.scrollBy((widthItem + 40) * i, 0);
}

next.addEventListener('click', (e) => {
  if (test >= 2) {
    petsRow1.append(photosItemsRow1[currentItem].cloneNode(true));
    petsRow2.append(photosItemsRow2[currentItem].cloneNode(true));
    currentItem++;

    if (currentItem >= 5) currentItem = 0;
  }
  petsRow1.scrollBy(widthItem + 40, 0);
  petsRow2.scrollBy(widthItem + 40, 0);
  test++;
});

prev.addEventListener('click', (e) => {
  if (test < -4) {
    petsRow1.prepend(photosItemsRow1[currentLastItem].cloneNode(true));
    petsRow2.prepend(photosItemsRow2[currentLastItem].cloneNode(true));
    currentLastItem--;

    if (currentLastItem <= 0) currentLastItem = 4;
  }

  petsRow1.scrollBy(-(widthItem + 40), 0);
  petsRow2.scrollBy(-(widthItem + 40), 0);
  test--;
});

// Zoogeography

const zoogeographyInfoEagle = document.querySelector(
  '.zoogeography .info-eagle'
);
const zoogeographyInfoAlligator = document.querySelector(
  '.zoogeography .info-alligator'
);
const zoogeographyInfoPanda = document.querySelector(
  '.zoogeography .info-panda'
);
const zoogeographyInfoGorilla = document.querySelector(
  '.zoogeography .info-gorilla'
);
const markerEagle = document.querySelector('.zoogeography__map .eagle');
const markerAlligator = document.querySelector('.zoogeography__map .alligator');
const markerPanda = document.querySelector('.zoogeography__map .panda');
const markerGorilla = document.querySelector('.zoogeography__map .gorilla');

markerAlligator.addEventListener('click', () => {
  zoogeographyInfoAlligator.classList.add('active');
  markerEagle.classList.remove('active');
  zoogeographyInfoEagle.classList.remove('active');
  zoogeographyInfoPanda.classList.remove('active');
  zoogeographyInfoGorilla.classList.remove('active');
});
markerEagle.addEventListener('click', () => {
  zoogeographyInfoEagle.classList.add('active');
  zoogeographyInfoAlligator.classList.remove('active');
  zoogeographyInfoPanda.classList.remove('active');
  zoogeographyInfoGorilla.classList.remove('active');
});
markerPanda.addEventListener('click', () => {
  zoogeographyInfoPanda.classList.add('active');
  markerEagle.classList.remove('active');
  zoogeographyInfoEagle.classList.remove('active');
  zoogeographyInfoAlligator.classList.remove('active');
  zoogeographyInfoGorilla.classList.remove('active');
});
markerGorilla.addEventListener('click', () => {
  zoogeographyInfoGorilla.classList.add('active');
  markerEagle.classList.remove('active');
  zoogeographyInfoPanda.classList.remove('active');
  zoogeographyInfoEagle.classList.remove('active');
  zoogeographyInfoAlligator.classList.remove('active');
});

// Slider in testimonials

(sliderInner = document.querySelector('.slider__inner')),
  (sliderItem = document.querySelector('.slider__item')),
  (reviewsNext = document.querySelector('.reviews .next')),
  (reviewsPrev = document.querySelector('.reviews .prev'));
let widthReviewsItem = sliderItem.offsetWidth;

window.addEventListener(
  'resize',
  (e) => (widthReviewsItem = sliderItem.offsetWidth)
);

const autoSlideFunc = () => {
  if (
    sliderInner.scrollWidth - widthReviewsItem + 40 <=
    sliderInner.scrollLeft + (widthReviewsItem + 40) * 2
  ) {
    sliderInner.scrollBy(-(widthReviewsItem + 40) * 2, 0);
  }

  sliderInner.scrollBy(widthReviewsItem + 40, 0);
};

let autoSlideInterval = setInterval(autoSlideFunc, 10000);
let autoSlideTimeout = null;

const delayAutoSlide = () => {
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;

  autoSlideTimeout = setTimeout(() => {
    autoSlideInterval = setInterval(autoSlideFunc, 10000);
  }, 10000);
};

sliderInner.addEventListener('click', delayAutoSlide);

reviewsPrev.addEventListener('click', (e) => {
  if (
    sliderInner.scrollWidth - widthReviewsItem + 40 <=
    sliderInner.scrollLeft + (widthReviewsItem + 40) * 2
  ) {
    sliderInner.scrollBy(-(widthReviewsItem + 40) * 2, 0);
  }
  sliderInner.scrollBy(widthReviewsItem + 40, 0);
  delayAutoSlide();
});
reviewsNext.addEventListener('click', (e) => {
  if (
    sliderInner.scrollWidth - widthReviewsItem + 40 >=
    sliderInner.scrollLeft + (widthReviewsItem + 40) * 2
  ) {
    sliderInner.scrollBy((widthReviewsItem + 40) * 3, 0);
  }

  sliderInner.scrollBy(-(widthReviewsItem + 40), 0);
  delayAutoSlide();
});
