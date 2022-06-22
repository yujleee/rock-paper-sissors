const bgm = new Audio('../assets/bgm.m4a');
const bgmButton = document.querySelector('.bgm-button');

bgmButton.addEventListener('click', function () {
  const image = bgmButton.querySelector('img');
  this.classList.toggle('is-active');

  if (this.classList.contains('is-active')) {
    image.src = `./assets/icon_sound_on.png`;
    bgm.play();
    bgm.loop = true;
  } else {
    image.src = `./assets/icon_sound_off.png`;
    bgm.pause();
  }
});
