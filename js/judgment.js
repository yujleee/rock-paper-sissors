const imageAreas = document.querySelectorAll('.image-area');
const images = [];

const resultText = {
  0: 'End in a tie! 😳',
  1: 'You Lose 😭',
  2: 'You Win! 🥳',
};

const caseWin = {
  rock: 'paper',
  paper: 'sissor',
  sissor: 'rock',
};

const getImage = () => {
  imageAreas.forEach((section) => {
    const src = section.querySelector('figure img').src;
    const cutStart = src.indexOf('_');
    const cutEnd = src.lastIndexOf('.');
    const name = src.slice(cutStart + 1, cutEnd);
    images.push(name);
  });
};

const judgement = () => {
  let result;
  const [computer, player] = images;

  if (computer === player) result = 0;
  else if (player === caseWin[computer]) result = 2;
  else result = 1;

  return resultText[result];
};

const playing = () => {
  let seconds = 3;
  const timer = setInterval(() => {
    if (seconds <= 0) {
      clearInterval(timer);
      getImage();
      console.log(judgement());
    }
    seconds -= 1;
  }, 1000);
};

playing();
