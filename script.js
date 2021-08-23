
var hr = 0;
var min = 0;
var sec = 0;

var isRunning = false;

var stopWatch = document.getElementById('stopwatch');
var startStopBtn = document.getElementById('start-stop-btn');
var resetBtn = document.getElementById('reset-btn');

function startTimer() {
  if (isRunning === false) {
    startStopBtn.innerHTML = "Stop";
    isRunning = true;
    timer();

  }
  $(this).one("click", stopTimer);
}

function stopTimer() {
  if (isRunning === true) {
    startStopBtn.innerHTML = "Start";
    isRunning = false;
    clearTimeout(timerRun);

    stopWatch.innerHTML = hr + ':' + min + ':' + sec; 
  }
  $(this).one("click", startTimer);
}

$("#start-stop-btn").one("click", startTimer);

document.getElementById("reset-btn").addEventListener("click", resetTimer);
function resetTimer() {
  if (isRunning === true) {
    startStopBtn.innerHTML = "Start";
    isRunning = false;
    clearTimeout(timerRun);
    stopWatch.innerHTML = '00:00:00';
    hr = 0;
    min = 0;
    sec = 0;
  }
  else {
    stopWatch.innerHTML = '00:00:00';
    hr = 0;
    min = 0;
    sec = 0;
  }
}

function timer() {
  if (isRunning === true) {
    hr = parseInt(hr);
    min = parseInt(min);
    sec = parseInt(sec);

    sec += 1;
    if (sec == 60) {
      min += 1;
      sec = 0;
    }
    if (min == 60) {
      hr += 1;
      min = 0;
      sec = 0;
    }
    if (sec < 10) {
      sec = '0' + sec;
    }
    if (min < 10) {
      min = '0' + min;
    }
    if (hr < 10) {
      hr = '0' + hr;
    }

    stopWatch.innerHTML = hr + ':' + min + ':' + sec;
    timerRun = setTimeout("timer()", 1000);
  }
  else {
  clearTimeout(timerRun);
  }
}
