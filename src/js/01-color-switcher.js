// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, 
// використовуючи інлайн стиль.Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.
// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. 
//Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною(disabled).
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.


const refs = {
    start: document.querySelector('[data-start]'),
    stop: document.querySelector('[data-stop]'),
    color: document.querySelector('body'),
};

let onStart = null;
// refs.start.addEventListener('click', onStop);

refs.start.addEventListener("click", () => {
    onStart = setInterval(() => {
        refs.color.style.backgroundColor = getRandomHexColor();
  }, 1000);
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}