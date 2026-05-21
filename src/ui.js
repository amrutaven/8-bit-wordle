import { MAX_GUESSES, WORD_LENGTH, scoreGuess } from "./game.js";

const KEY_ROWS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

export function renderApp(root, game, handlers, message = "") {
  root.innerHTML = `
    <section class="game">
      <h1>8-Bit Wordle</h1>
      <p class="message">${message}</p>
      <div class="board">
        ${renderBoard(game)}
      </div>
      <div class="keyboard">
        ${renderKeyboard()}
      </div>
      <button class="restart" data-key="restart">Restart</button>
    </section>
  `;

  root.querySelectorAll("[data-key]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.key;

      if (key === "restart") {
        handlers.onRestart();
      } else {
        handlers.onKey(key);
      }
    });
  });
}

function renderBoard(game) {
  let html = "";

  for (let row = 0; row < MAX_GUESSES; row++) {
    const submittedGuess = game.guesses[row];
    const isCurrentRow = row === game.guesses.length;

    const letters = submittedGuess || (isCurrentRow ? game.currentGuess : "");

    const score = submittedGuess ? scoreGuess(submittedGuess, game.answer) : [];

    html += `<div class="row">`;

    for (let col = 0; col < WORD_LENGTH; col++) {
      const letter = letters[col] || "";
      const state = score[col] || "";
      html += `<div class="tile ${state}">${letter}</div>`;
    }

    html += `</div>`;
  }

  return html;
}

function renderKeyboard() {
  return KEY_ROWS.map((row, index) => {
    const letterButtons = row
      .split("")
      .map((letter) => `<button data-key="${letter}">${letter}</button>`)
      .join("");

    if (index === 2) {
      return `<div class="key-row"><button class="wide" data-key="Enter">Enter</button>${letterButtons}<button class="wide" data-key="Backspace">Backspace</button></div>`;
    }

    return `<div class="key-row">${letterButtons}</div>`;
  }).join("");
}
