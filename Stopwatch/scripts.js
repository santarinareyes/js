"use_strict";

const stopwatch = document.querySelector("#stopwatch"),
  startStopBtn = document.querySelector("#start_stop"),
  resetBtn = document.querySelector("#reset");

let isRunning = false,
  startTime,
  currentTime,
  elapsedTime = 0,
  clockInterval,
  continueClock,
  hours,
  minutes,
  seconds,
  remainder;

function addLeadingZero(number) {
  if (number < 10) {
    return "0" + number.toString();
  } else {
    return number.toString();
  }
}

startStopBtn.onclick = function () {
  if (!isRunning) {
    // start the clock
    isRunning = true;

    if (elapsedTime == 0) {
      startTime = new Date().getTime();
    } else {
      startTime = new Date().getTime() - elapsedTime;
    }

    clockInterval = window.setInterval(function () {
      currentTime = new Date().getTime();
      elapsedTime = currentTime - startTime;

      hours = Math.floor(elapsedTime / 3600000);
      remainder = elapsedTime - hours * 3600000;

      minutes = Math.floor(remainder / 60000);
      remainder -= minutes * 60000;

      seconds = Math.floor(remainder / 1000);
      remainder -= seconds * 1000;

      formattedTime =
        addLeadingZero(hours) +
        ":" +
        addLeadingZero(minutes) +
        ":" +
        addLeadingZero(seconds) +
        ":" +
        addLeadingZero(remainder);

      stopwatch.innerHTML = formattedTime;
    }, 33);
  } else {
    // stop the clock
    window.clearInterval(clockInterval);
    isRunning = false;
  }
};

resetBtn.onclick = function () {
  startTime = new Date().getTime();
  if (!isRunning) {
    elapsedTime = 0;
    stopwatch.innerHTML = "00:00:00:000";
  }
};
