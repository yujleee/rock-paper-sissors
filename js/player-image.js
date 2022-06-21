const buttonList = document.querySelectorAll('.play-button');
const playerImage = document.querySelector('.image-area.player');

const changePlayerImage = (seletedImage) => {
  const image = playerImage.querySelector('figure img');
  image.src = `./assets/img_${seletedImage}.png`;
};

function handlePlayerImage() {
  const clickedButton = this.classList.item(1);
  changePlayerImage(clickedButton);
}

buttonList.forEach((button) => {
  button.addEventListener('click', handlePlayerImage);
});
