import { WORDS } from "./words.js";

export const WORD_LENGTH = 5;
export const MAX_GUESSES = 6;

export function createGame() {
  return {
    answer: pickRandomWord(),
    guesses: [],
    currentGuess: "",
    status: "playing"
  };
}

function pickRandomWord() {
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
}

export function addLetter(game, letter) {
  if (game.status !== "playing") return;
  if (game.currentGuess.length >= WORD_LENGTH) return;

  game.currentGuess += letter.toUpperCase();
}

export function removeLetter(game) {
  if (game.status !== "playing") return;

  game.currentGuess = game.currentGuess.slice(0, -1);
}

export function submitGuess(game) {
  if (game.status !== "playing") return "Game is already over.";

  if (game.currentGuess.length < WORD_LENGTH) {
    return "Not enough letters";
  }

  game.guesses.push(game.currentGuess);

  if (game.currentGuess === game.answer) {
    game.status = "won";
    return "You won!";
  }

  game.currentGuess = "";

  if (game.guesses.length >= MAX_GUESSES) {
    game.status = "lost";
    return `You lost! The word was ${game.answer}`;
  }

  return "";
}

export function scoreGuess(guess, answer) {
  const result = Array(WORD_LENGTH).fill("absent");
  const remainingLetters = answer.split("");

  for (let index = 0; index < WORD_LENGTH; index++) {
    if (guess[index] === answer[index]) {
      result[index] = "correct";
      remainingLetters[index] = null;
    }
  }

  for (let index = 0; index < WORD_LENGTH; index++) {
    if (result[index] !== "correct") {
      const matchIndex = remainingLetters.indexOf(guess[index]);
      if (matchIndex !== -1) {
        result[index] = "present";
        remainingLetters[matchIndex] = null;
      }
    }
  }

  return result;
}
