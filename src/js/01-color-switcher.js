const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  color: document.querySelector('body'),
};

refs.stop.addEventListener('click', onStop);
let onStart = null;

refs.start.addEventListener('click', () => {
  onStart = setInterval(() => {
    refs.color.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.start.disabled = true;
});

function onStop() {
  clearInterval(onStart);
  refs.start.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
