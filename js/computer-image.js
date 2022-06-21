const computerImage = document.querySelector('.image-area.computer');

const imageList = {
  0: 'rock',
  1: 'paper',
  2: 'sissor',
};

const getRandom = () => {
  return Math.floor(Math.random() * 3);
};

const changeComputerImage = () => {
  const randomNumber = getRandom();
  const imageName = imageList[randomNumber];
  const image = computerImage.querySelector('figure img');
  image.src = `./assets/img_${imageName}.png`;
};

changeComputerImage();
