/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */

function getRandomIndex() {
  const randomIndex = Math.floor(Math.random() * 15);
  return randomIndex;
}

const img = document.createElement('img');
img.id = 'img';
img.className = 'img';
img.setAttribute('src', 'https://github.com/netology-code/ahj-homeworks/raw/master/dom/pic/goblin.png');
img.setAttribute('alt', 'face');

let yourScore = 0;
let computerScore = 0;
let score = 0;

function getMove() {
  const field = document.getElementById('someField');
  const randomPos = field.children[getRandomIndex()];
  if (img) {
    img.remove();
  }

  randomPos.appendChild(img);
  const result = document.getElementById('score');
  result.style.fontWeight = '900';
  result.textContent = `Score: You ${yourScore} : Computer ${computerScore} `;
  score++;
}

getMove();

const popup = document.getElementById('popup');
popup.classList.add('hide');

function rules() {
  const totalScore = document.getElementById('total-score');
  const btnTotal = document.getElementById('total');


  if (computerScore > 4) {
    computerScore = 4;
    popup.classList.remove('hide');
    popup.classList.add('active');
    img.classList.add('hide');

    totalScore.textContent = `Game over! | Your score ${yourScore}`;

    btnTotal.addEventListener('click', () => {
      location.reload();
    });
  } else if (score >= yourScore) {
    computerScore++;
    getMove();
  }
}

const btnStart = document.getElementById('start');
btnStart.addEventListener('click', () => {
  let timer = setInterval(rules, 1000);
  img.addEventListener('click', () => {
    yourScore++;
    clearInterval(timer);
    getMove();
    timer = setInterval(rules, 1000);
  });
});
