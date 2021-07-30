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

// Zoogeography

const zoogeographyInfoEagle = document.querySelector('.info-eagle');
const zoogeographyInfoAlligator = document.querySelector('.info-alligator');
const zoogeographyInfoPanda = document.querySelector('.info-panda');
const zoogeographyInfoGorilla = document.querySelector('.info-gorilla');

const markerEagle = document.querySelector('.eagle');
const markerAlligator = document.querySelector('.alligator');
const markerPanda = document.querySelector('.panda');
const markerGorilla = document.querySelector('.gorilla');
const mapImg = document.querySelector('.map');


markerAlligator.addEventListener('click', () => {
  markerEagle.classList.remove('active');
  zoogeographyInfoAlligator.classList.add('active');
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
  markerEagle.classList.remove('active');
  zoogeographyInfoPanda.classList.add('active');
  zoogeographyInfoEagle.classList.remove('active');
  zoogeographyInfoAlligator.classList.remove('active');
  zoogeographyInfoGorilla.classList.remove('active');
});
markerGorilla.addEventListener('click', () => {
  markerEagle.classList.remove('active');
  zoogeographyInfoGorilla.classList.add('active');
  zoogeographyInfoPanda.classList.remove('active');
  zoogeographyInfoEagle.classList.remove('active');
  zoogeographyInfoAlligator.classList.remove('active');
});


mapImg.addEventListener('click', (e) => {
  if (e.target === zoogeographyInfoEagle || e.target === zoogeographyInfoAlligator || e.target === zoogeographyInfoPanda || e.target === zoogeographyInfoGorilla){
    console.log('active');
  }
  else if (e.target === mapImg) {
    zoogeographyInfoGorilla.classList.remove('active');
    zoogeographyInfoPanda.classList.remove('active');
    zoogeographyInfoEagle.classList.remove('active');
    zoogeographyInfoAlligator.classList.remove('active');
  }
});
