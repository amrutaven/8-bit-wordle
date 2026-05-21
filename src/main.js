import { createGame, addLetter, removeLetter, submitGuess } from "./game.js";
import { renderApp } from "./ui.js";
import { injectStyles } from "./styles.js";

const root = document.querySelector("#app");

let game = createGame();
let message = "";

injectStyles();
render();

function render() {
  renderApp(root, game, { onKey: handleKey, onRestart: restart }, message);
}

function handleKey(key) {
  message = "";

  if (/^[A-Z]$/.test(key)) {
    addLetter(game, key);
  }

  if (key === "Backspace") {
    removeLetter(game);
  }

  if (key === "Enter") {
    message = submitGuess(game);
  }

  render();
}

function restart() {
  game = createGame();
  message = "";
  render();
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleKey("Enter");
  } else if (event.key === "Backspace") {
    handleKey("Backspace");
  } else if (/^[a-zA-Z]$/.test(event.key)) {
    handleKey(event.key.toUpperCase());
  }
});
