let stoneBtn = document.querySelector(".stone");
let paperBtn = document.querySelector(".paper");
let scissorBtn = document.querySelector(".scissor");
let hand1 = document.querySelector(".hand1");
let hand2 = document.querySelector(".hand2");
let computerScore = document.getElementById("computer_score");
let tieScore = document.getElementById("tie_score");
let playerScore = document.getElementById("player_score");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");

let img = ["stone-mirror", "scissor-mirror", "paper-mirror"];
let argumentName = ["stone", "scissor", "paper"];
let tie = 0;
let cs = 0;
let ps = 0;
let i;
let arg;

//updown class add 
const updown = () => {
  hand1.classList.add("updown");
  hand2.classList.add("updown");
};

//updown class remove
const removeUpDown = () => {
  hand1.classList.remove("updown");
  hand2.classList.remove("updown");
};

//Computer-Hand
const randomHand = () => {
  i = Math.floor(Math.random() * 2);
  arg = argumentName[i];
  // console.log(arg);
  return (hand1.innerHTML = `<img src="./images/${img[i]}.png"/>`);
};

//comparison
const compare = (computer, player) => {
  if (computer == player) {
    tieScore.innerText = tie += 1;
  } else if (
    (computer === "stone" && player === "scissor") ||
    (computer === "paper" && player === "stone") ||
    (computer === "scissor" && player === "paper")
  ) {
    computerScore.innerText = cs += 1;
  } else {
    playerScore.innerText = ps += 1;
  }
};

//Final Result
const getResult = (icon, argument) => {
  // console.log(e.target);
  updown();
  setTimeout(() => {
    hand2.innerHTML = `<img src="./images/${icon}.png" />`;
    randomHand();
    compare(arg, argument);
    removeUpDown();
  }, 1500);
  hand1.innerHTML = `<img src="./images/stone-mirror.png" />`;
  hand2.innerHTML = `<img src="./images/stone-icon.png" />`;
};

stoneBtn.addEventListener("click", () => {
  getResult("stone-icon", "stone");
});
paperBtn.addEventListener("click", () => {
  getResult("paper-icon", "paper");
});
scissorBtn.addEventListener("click", () => {
  getResult("scissor-icon", "scissor");
});
