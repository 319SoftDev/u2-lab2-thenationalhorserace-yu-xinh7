console.log("Script Running");

const changePosition = (horse, position) => (position <= 5 ? horse.style.setProperty('grid-column', position) : null);

let blue_position = 1;
let pink_position = 1;
let brown_position = 1;


// Query Selectors Here
const blueButton = document.querySelector("#blue-button");
const blueHorse = document.querySelector("#blue-horse");

const pinkButton = document.querySelector("#pink-button");
const pinkHorse = document.querySelector("#pink-horse");

const brownButton = document.querySelector("#pink-button");
const brownHorse = document.querySelector("#pink-horse");

// OnClick Functions Here
const advanceBlue = (e) => {
  blue_position += 1;
  changePosition(blueHorse, blue_position);
};

const advancePink = (e) => {
  pink_position += 1;
  changePosition(pinkHorse, pink_position);
};

const advanceBrown = (e) => {
  pink_position += 1;
  changePosition(brownHorse, brown_position);
};

// Check for a winner
const checkWinner = (position, color) => {

};



// Event Listeners Here
blueButton.addEventListener("click", advanceBlue);
pinkButton.addEventListener("click", advancePink);
brownButton.addEventListener("click", advanceBrown);