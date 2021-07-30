const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');
const btnContainer = document.querySelector('.btn-container');
const btn = document.querySelectorAll('.btn');
const fullscreen = document.querySelector('.fullscreen');

pianoКeys.forEach((item) => {
  item.classList.remove('after');
});

function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}
function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  event.target.classList.remove('piano-key-active');
}

const startSound = (event) => {
  if (event.target.classList.contains('piano-key')) {
    event.target.classList.add('piano-key-active');
  }
  const note = event.target.dataset.note;
  const src = `assets/audio/${note}.mp3`;
  playAudio(src);
};

function startMouseOver(event) {
  if (event.target.classList.contains('piano-key')) {
    event.target.classList.add('piano-key-active');
    const note = event.target.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    playAudio(src);

    pianoКeys.forEach((item) => {
      item.addEventListener('transitionend', removeTransition);
    });

    pianoКeys.forEach((item) => {
      item.addEventListener('mouseover', startSound);
    });
  }
}

function stopMouseOver(event) {
  pianoКeys.forEach((item) => {
    item.addEventListener('transitionend', removeTransition);
  });
  pianoКeys.forEach((item) => {
    item.removeEventListener('mouseover', startSound);
  });
}
function stopSound(event) {
  pianoКeys.forEach((item) => {
    item.addEventListener('transitionend', removeTransition);
  });
  pianoКeys.forEach((item) => {
    item.removeEventListener('keydown', startSound);
  });
}

function keyDownStart(event) {
  if (event.repeat === true) {
    stopSound(event);
  } else {
    console.log(event);
    const key = document.querySelector(`div[data-key="${event.code}"]`);
    const note = key.dataset.note;
    let src = `assets/audio/${note}.mp3`;
    key.classList.add('piano-key-active');

    playAudio(src);
  }
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

window.addEventListener('keydown', keyDownStart);
window.addEventListener('keyup', (event) => {
  pianoКeys.forEach((item) => {
    item.addEventListener('transitionend', removeTransition);
  });
});

piano.addEventListener('mousedown', startMouseOver);
piano.addEventListener('mouseup', stopMouseOver);

btnContainer.addEventListener('click', (event) => {
  btn.forEach((item) => {
    if (item.classList.contains('btn-active')) {
      item.classList.remove('btn-active');
    }
  });
  event.target.classList.add('btn-active');

  pianoКeys.forEach((item) => {
    if (event.target.classList.contains('btn-notes')) {
      item.classList.remove('after');
      item.classList.add('before');
    } else {
      item.classList.remove('before');
      item.classList.add('after');
    }
  });
});



fullscreen.addEventListener('click', toggleFullScreen);
