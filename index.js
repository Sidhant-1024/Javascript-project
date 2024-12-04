const inputEl = document.querySelector("input");
const guessEl = document.querySelector(".guess");
const checkBtnEl = document.querySelector("button");
const remainingChancesTextEl = document.querySelector(".chances");
const remainingChancesEl = document.querySelector(".chance");

let randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a number between 1 and 100
let totalChances = 10;

checkBtnEl.addEventListener("click", () => {
  // Parse input value as a number
  let inputValue = parseInt(inputEl.value, 10);

  // Decrease total chances
  totalChances--;

  if (totalChances === 0) {
    inputEl.value = ""; // Clear the input field
    inputEl.disabled = true; // Disable the input field
    guessEl.textContent = "Oops...! Bad luck😥, You lost the game.";
    guessEl.style.color = "red";
    checkBtnEl.textContent = "Play Again...😉";
    remainingChancesTextEl.textContent = "No chances left";

    // Enable replay by refreshing the page or resetting state
    checkBtnEl.addEventListener("click", () => {
      location.reload();
    });
  } else if (inputValue > randomNumber && inputValue <= 100) {
    guessEl.textContent = "Your Guess is High👍.";
    guessEl.style.color = "#1446a0";
    remainingChancesEl.textContent = totalChances;
  } else if (inputValue < randomNumber && inputValue >= 1) {
    guessEl.textContent = "Your Guess is Low👎.";
    guessEl.style.color = "#1446a0";
    remainingChancesEl.textContent = totalChances;
  } else if (inputValue === randomNumber) {
    guessEl.textContent = "Congratulations! 🎉 You guessed the number.";
    guessEl.style.color = "green";
    inputEl.disabled = true;
    checkBtnEl.textContent = "Play Again...😉";

    // Enable replay by refreshing the page or resetting state
    checkBtnEl.addEventListener("click", () => {
      location.reload();
    });
  } else {
    guessEl.textContent = "Invalid number. Please enter a number between 1 and 100.";
    guessEl.style.color = "red";
    remainingChancesEl.textContent = totalChances;
  }
});
