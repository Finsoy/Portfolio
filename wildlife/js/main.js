let position = 0
const slidesToShow = 3
const slidesToScroll = 1
const container = document.querySelector('.articles__slider')
const track = document.querySelector('.slider__inner')
const btnPrev = document.querySelector('.slider__prev')
const btnNext = document.querySelector('.slider__next')
const items = document.querySelectorAll('.slider__item')
const itemsCount = items.length
const itemWidth = 360
const movePosition = slidesToScroll * itemWidth

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`
})

btnNext.addEventListener('click', () => {
  const itemsLeft =
    itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth
  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth
  setPosition()
  chekBtns()
})

btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth
  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth
  setPosition()
  chekBtns()
})

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`
}

const chekBtns = () => {
  btnPrev.disabled = position === 0
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth
}
chekBtns()
