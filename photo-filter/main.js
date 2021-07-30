const inputs = document.querySelectorAll('.filters input');
const outputs = document.querySelectorAll('.filters output');
const labels = document.querySelectorAll('label');
const filter = document.querySelector('.filters');
const img = document.querySelector('img');
const btnReset = document.querySelector('.btn-reset');
const btnNext = document.querySelector('.btn-next');
const canvas = document.querySelector('canvas');
const saveBtn = document.getElementById('download');
const loadBtn = document.getElementById('btnInput');
const fullscreen = document.querySelector('.fullscreen');

const base =
  'https://raw.githubusercontent.com/Finsoy/stage1-tasks/assets/images';
let date = new Date();
let timeOfDay = '';
const images = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg',
  '06.jpg',
  '07.jpg',
  '08.jpg',
  '09.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
  '15.jpg',
  '16.jpg',
  '17.jpg',
  '18.jpg',
  '19.jpg',
  '20.jpg',
];
let imagesIterator = 0;

// Fullscreen
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// photo-Filter

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  drawImage();
}

function outputUpdate(event) {
  if (event.target.nextElementSibling.textContent !== null) {
    event.target.nextElementSibling.textContent = this.value;
  }
}

function reset(event) {
  inputs.forEach((input) => {
    const suffix = input.dataset.sizing || '';
    if (input.name === 'saturate') {
      document.documentElement.style.setProperty(
        `--${input.name}`,
        100 + suffix
      );
      input.value = 100;
      input.nextElementSibling.textContent = input.value;
    } else {
      document.documentElement.style.setProperty(
        `--${input.name}`,
        input.min + suffix
      );
      input.value = 0;
      input.nextElementSibling.textContent = input.value;
    }
  });
  drawImage();
}

labels.forEach((i) =>
  i.addEventListener('input', (e) => {
    e.target.addEventListener('input', handleUpdate);
    e.target.addEventListener('input', outputUpdate);
  })
);

btnReset.addEventListener('click', reset);

// Images loader (button next)

if (date.getHours() >= 6 && date.getHours() < 12) {
  timeOfDay = 'morning';
} else if (date.getHours() >= 12 && date.getHours() < 18) {
  timeOfDay = 'day';
} else if (date.getHours() >= 18 && date.getHours() <= 23.59) {
  timeOfDay = 'evening';
} else if (date.getHours() >= 0 && date.getHours() < 6) {
  timeOfDay = 'night';
}

function imagesUpdate() {
  if (imagesIterator === images.length) {
    imagesIterator = 0;
  }
  const newImg = new Image();
  newImg.src = `${base}/${timeOfDay}/${images[imagesIterator]}`;
  newImg.onload = () => {
    img.src = newImg.src;
    drawImage();
  };
  imagesIterator++;
  console.log(imagesIterator);
  btnNext.disabled = true;
  setTimeout(function () {
    btnNext.disabled = false;
  }, 100);
  loadBtn.value = '';
}

btnNext.addEventListener('click', () => {
  imagesUpdate();
});

//Load image from pc

loadBtn.addEventListener('change', function (e) {
  const file = loadBtn.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const loadImg = new Image();
    loadImg.src = reader.result;
    img.src = loadImg.src;
    drawImage();
  };
  reader.readAsDataURL(file);
});

//Draw canvas img

function drawImage() {
  const drawImg = new Image();
  drawImg.setAttribute('crossOrigin', 'anonymous');

  drawImg.src = img.src;
  drawImg.onload = function () {
    drawImg.style.maxWidth = '830px';
    drawImg.style.maxHeight = '520px';
    canvas.width = drawImg.width;
    canvas.height = drawImg.height;
    const ctx = canvas.getContext('2d');

    ctx.filter = `blur(${
      outputs[0].value * (img.naturalHeight / img.height).toFixed(2)
    }px) invert(${outputs[1].value}%) sepia(${outputs[2].value}%) saturate(${
      outputs[3].value
    }%) hue-rotate(${outputs[4].value}deg)`;
    console.log(ctx.filter);

    ctx.drawImage(drawImg, 0, 0);
  };
}

drawImage();

// Download canvas image

saveBtn.addEventListener('click', (e) => {
  drawImage();
  let link = document.createElement('a');
  link.download = 'download.png';
  link.href = canvas.toDataURL('');
  link.click();
  link.delete;
});

fullscreen.addEventListener('click', toggleFullScreen);
