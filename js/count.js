import { computerImage } from './computer-image.js';
import { getImage, judgement } from './judgment.js';
import { checkBrowser } from './check-browser.js';

const timerText = document.querySelector('.image-area .timer');
const resultArea = document.querySelector('.result');
const resultText = resultArea.querySelector('.resultText');

const browser = checkBrowser();
const startTimerLayer = document.querySelector('.start-timer-layer');

const sound = new Audio('../assets/count.mp3');

const playing = () => {
  let seconds = 3;
  const timer = setInterval(() => {
    timerText.innerHTML = `${seconds}`;
    if (seconds <= 0) {
      clearInterval(timer);
      getImage();
      timerText.classList.add('done');
      computerImage.classList.add('is-active');
      resultArea.classList.add('is-active');
      const result = judgement();
      resultText.innerHTML = `${result}`;
    }
    seconds -= 1;
  }, 650);
  sound.play();
};

function startGameOnSafari() {
  playing();
  startTimerLayer.classList.toggle('is-active');
}

if (browser !== 'Safari') {
  playing();
}

startTimerLayer.addEventListener('click', startGameOnSafari);
