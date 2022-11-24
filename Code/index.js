const dateTime = document.getElementById("time");
const lives = document.getElementById("lives");
const answer = document.getElementById("answer");
const number = document.querySelector("form");
const numberChoice = document.querySelector("input[type='number']");

//Function for real time
const timer = () => {
  dateTime.textContent = new Date().toLocaleTimeString();
  setInterval(() => {
    dateTime.textContent = new Date().toLocaleTimeString();
  }, 1000);
};

//Function to return a random number
const randomMysteryNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

//Function to determine if the Mystery Number is more or less large
const plusOrMinus = (chosenNumber, randomNumber, userLives) => {
  if (parseInt(chosenNumber) > randomNumber) {
    answer.textContent = "C'est Moins !";
    lives.textContent = "Nombre de vie(s): " + userLives;
  } else if (parseInt(chosenNumber) < randomNumber) {
    answer.textContent = "C'est Plus !";
    lives.textContent = "Nombre de vie(s): " + userLives;
  } else if (parseInt(chosenNumber) === randomNumber) {
    answer.textContent = "Gagné !";
  }
};

//To play the Game and reset values
play.addEventListener("click", () => {
  let userLives = 5;
  let random = randomMysteryNumber();
  numberChoice.value = "";
  lives.textContent = "Nombre de vie(s): " + userLives;
  answer.textContent = "C'est parti !";
  number.addEventListener("submit", (e) => {
    e.preventDefault();
    if (userLives > 0) {
      let chosenNumber = e.path[0][0].value;
      plusOrMinus(chosenNumber, random, userLives);
      userLives -= 1;
      lives.textContent = "Nombre de vie(s): " + userLives;
    } else {
      answer.textContent = "Perdu !";
    }
  });
});

timer();
