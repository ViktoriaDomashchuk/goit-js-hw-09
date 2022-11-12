import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  div: document.querySelector('.timer'),
  input: document.querySelector('#datetime-picker'),
  btn: document.querySelector('[data-start]'),
  dateDays: document.querySelector('[data-days]'),
  dateHours: document.querySelector('[data-hours]'),
  dateMinutes: document.querySelector('[data-minutes]'),
  dateSeconds: document.querySelector('[data-seconds]'),
};

// let timerId = null;

// function countdownTimer() {
//   const diff = convertMs(flatpickr);
//   console.log(diff);
//   if (diff <= 0) {
//     clearInterval(timerId);
//   }
// }
// timerId = setInterval(countdownTimer, 1000);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

flatpickr(refs.input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
});

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
