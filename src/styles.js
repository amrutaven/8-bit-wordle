export function injectStyles() {
  const style = document.createElement("style");

  style.textContent = `
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      background: #101820;
      color: #f8f8f2;
      font-family: "Courier New", monospace;
    }

    .game {
      width: min(92vw, 420px);
      text-align: center;
    }

    h1 {
      margin: 0 0 18px;
      font-size: 2rem;
      text-transform: uppercase;
    }

    .message {
      min-height: 24px;
      margin: 0 0 14px;
      font-weight: 700;
    }

    .board {
      display: grid;
      gap: 8px;
      margin-bottom: 22px;
    }

    .row {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 8px;
    }

    .tile {
      aspect-ratio: 1;
      display: grid;
      place-items: center;
      border: 3px solid #3a4655;
      background: #182431;
      font-size: 1.8rem;
      font-weight: 900;
      text-transform: uppercase;
    }

    .correct {
      background: #2fb344;
      border-color: #2fb344;
    }

    .present {
      background: #d99a1e;
      border-color: #d99a1e;
    }

    .absent {
      background: #596579;
      border-color: #596579;
    }

    .keyboard {
      display: grid;
      gap: 8px;
    }

    .key-row {
      display: flex;
      justify-content: center;
      gap: 6px;
    }

    button {
      min-width: 32px;
      height: 44px;
      border: 0;
      border-radius: 4px;
      background: #d6dde8;
      color: #101820;
      font: inherit;
      font-weight: 900;
      cursor: pointer;
    }

    button:hover {
      background: #ffffff;
    }

    .wide {
      min-width: 64px;
    }

    .restart {
      margin-top: 18px;
      padding: 0 18px;
      background: #61dafb;
    }
  `;

  document.head.appendChild(style);
}
