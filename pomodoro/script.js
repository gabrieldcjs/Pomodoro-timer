document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.querySelector('.start--button');
  const pauseButton = document.querySelector('.pause--button');
  const resetButton = document.querySelector('.reset--button');
  const timerDisplay = document.querySelector('.timer--display');
  const workDurationInput = document.querySelector('.work-duration');

  let timerInterval;
  let seconds = workDurationInput.value;

  function updateTimerDisplay() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timerDisplay.textContent = `Timer: ${minutes}:${
      remainingSeconds < 10 ? '0' : ''
    }${remainingSeconds}`;
  }

  function startTimer() {
    seconds = parseInt(workDurationInput.value) * 60;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      seconds--;
      updateTimerDisplay();

      if (seconds === 0) {
        clearInterval(timerInterval);
        startButton.disabled = false;
      }
    }, 1000);

    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;
  }

  function pauseTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = false;
  }

  function resetTimer() {
    clearInterval(timerInterval);
    seconds = workDurationInput.value * 60;
    updateTimerDisplay();
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
  }

  startButton.addEventListener('click', startTimer);
  pauseButton.addEventListener('click', pauseTimer);
  resetButton.addEventListener('click', resetTimer);
});
