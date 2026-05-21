# 8-Bit Wordle
# By Amruta Venkatesh

[Play Here!](https://amrutaven.github.io/8-bit-wordle/)

A small browser-based Wordle-style game built with vanilla JavaScript, HTML, and CSS. The app picks a random five-letter word, lets the player make up to six guesses, and scores each guess with correct, present, and absent letter states.

The interface is styled like a retro 8-bit computer game, with a CRT-inspired panel, pixel fonts, scanline texture, square tiles, chunky shadows, and high-contrast arcade colors.

## How to Run Locally

From the project folder, start a local static server:

```bash
python3 -m http.server 5173
```

Then open:

```text
http://localhost:5173
```

If that port is already in use, try another one:

```bash
python3 -m http.server 8000
```

## What I Built

- A game state module that tracks the answer, current guess, submitted guesses, and win/loss status.
- A scoring function that compares each guess against the answer and marks letters as `correct`, `present`, or `absent`.
- A UI renderer that builds the board, keyboard, message area, and restart button.
- Support for both physical keyboard input and on-screen keyboard clicks.
- A final keyboard row with command keys before and after the letters.
- Short on-screen labels, `Go` and `Del`, that still trigger `Enter` and `Backspace` behavior.
- An 8-bit-inspired visual system with pixel fonts, square tiles, chunky black shadows, a dark CRT-style game panel, scanlines, and high-contrast feedback colors.

## Steps I Took

1. Created the base HTML page with a single `#app` mount point.
2. Added the word list in `src/words.js`.
3. Built the core game logic in `src/game.js`, including random word selection, adding/removing letters, submitting guesses, and tracking game status.
4. Added guess scoring so letters are marked based on whether they are in the right spot, elsewhere in the word, or not in the answer.
5. Built the UI rendering in `src/ui.js` for the game board, keyboard, messages, and restart button.
6. Wired everything together in `src/main.js`, including click handlers and physical keyboard events.
7. Fixed keyboard input so `Backspace` and `Enter` are handled as commands instead of being treated like regular letters.
8. Added styles in `src/styles.js` to make the app readable, centered, and closer to an 8-bit game feel.
9. Refined the UI with a CRT-style frame, dark terminal background, scanline overlay, pixel-style title treatment, square controls, and pressed-button states.
10. Adjusted the on-screen keyboard so the command keys fit the retro layout while still using the correct game actions internally.
11. Cleaned up remaining TODOs and checked that the JavaScript files parse correctly.

## Project Structure

```text
.
├── index.html
├── README.md
└── src
    ├── game.js
    ├── main.js
    ├── styles.js
    ├── ui.js
    └── words.js
```

## Notes

This project uses browser-native ES modules, so it should be run through a local server instead of opening `index.html` directly from the filesystem.
