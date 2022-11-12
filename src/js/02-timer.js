import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  btn: document.querySelector('[data-start]'),
  dateDays: document.querySelector('[data-days]'),
  dateHours: document.querySelector('[data-hours]'),
  dateMinutes: document.querySelector('[data-minutes]'),
  dateSeconds: document.querySelector('[data-seconds]'),
};
console.log(refs.input);
// refs.btn.addEventListener('click', onStart);

flatpickr(refs.input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
});


// const date = new Date();
// if (refs.input.getTime() <= date.getTime()) {
//   refs.btn.disabled = true;
// }


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
