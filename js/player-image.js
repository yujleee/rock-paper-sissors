const buttonList = document.querySelectorAll('.play-button');
const playerImage = document.querySelector('.image-area.player figure img');

const changePlayerImage = (seletedImage) => {
  playerImage.classList.add('is-active');
  playerImage.src = `./assets/img_${seletedImage}.png`;
};

function handlePlayerImage(e) {
  e.preventDefault();
  const buttonGroup = this.parentNode;
  const active = buttonGroup.querySelector('.is-active');
  if (active) {
    active.classList.remove('is-active');
  }
  e.currentTarget.classList.add('is-active');

  const clickedButton = this.classList.item(1);
  changePlayerImage(clickedButton);
}

buttonList.forEach((button) => {
  button.addEventListener('click', handlePlayerImage);
});
