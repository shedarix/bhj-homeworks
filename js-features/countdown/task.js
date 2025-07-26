
let timerElement = document.getElementById('timer');
let alertElement = document.getElementById('alert');
let secondsRemaining = Number(timerElement.textContent);

function formatTime(secs) {
  let hours = Math.floor(secs / 3600);
  let minutes = Math.floor((secs % 3600) / 60);
  let seconds = secs % 60;

  return [
    pad(hours),
    pad(minutes),
    pad(seconds)
  ].join(':');
}

function pad(num) {
  return num.toString().padStart(2, '0');
}

let intervalId = setInterval(() => {
  secondsRemaining--;

  timerElement.textContent = formatTime(secondsRemaining);

  if (secondsRemaining <= 0) {
    clearInterval(intervalId);
    alertElement.classList.add('visible');
  }
}, 1000);