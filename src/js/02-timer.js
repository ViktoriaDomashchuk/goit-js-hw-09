import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  btn: document.querySelector('[data-start]'),
  dateDays: document.querySelector('[data-days]'),
  dateHours: document.querySelector('[data-hours]'),
  dateMinutes: document.querySelector('[data-minutes]'),
  dateSeconds: document.querySelector('[data-seconds]'),
};

refs.btn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const onChooseDate = selectedDates[0].getTime();
    if (onChooseDate <= new Date().getTime()) {
      Notify.failure('Please choose a date in the future');
      return;
    }

    refs.btn.disabled = false;

    refs.btn.addEventListener('click', () => {
      refs.btn.disabled = true;
      refs.input.disabled = true;

      let timerId = null;
      timerId = setInterval(() => {
        let timerValue = convertMs(onChooseDate - Date.parse(new Date()));
        refs.dateDays.textContent = addLeadingZero(timerValue.days);
        refs.dateHours.textContent = addLeadingZero(timerValue.hours);
        refs.dateMinutes.textContent = addLeadingZero(timerValue.minutes);
        refs.dateSeconds.textContent = addLeadingZero(timerValue.seconds);

        if (onChooseDate - Date.parse(new Date()) === 0) {
          clearInterval(timerId);
          Notify.success('Time is up');
        }
      }, 1000);
    });
  },
};

const flatPicker = flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

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
