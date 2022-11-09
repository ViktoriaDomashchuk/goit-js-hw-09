const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  bodyColor: document.querySelector('body'),
};

refs.stop.addEventListener('click', onStop);

let onStart = null;

refs.start.addEventListener('click', () => {
  onStart = setInterval(() => {
    refs.bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);

  disableBtn();
});

function onStop() {
  clearInterval(onStart);

  enableBtn();
}

const disableBtn = () => {
  refs.start.disabled = true;
};

const enableBtn = () => {
  refs.start.disabled = false;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
