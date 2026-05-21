export function injectStyles() {
  const style = document.createElement("style");

  style.textContent = `
    @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap");

    * {
      box-sizing: border-box;
    }

    html {
      background: #061536;
    }

    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      overflow-x: hidden;
      background:
        radial-gradient(circle at 50% 18%, rgba(82, 139, 255, 0.2), transparent 34%),
        linear-gradient(135deg, #071224 0%, #061536 48%, #020509 100%);
      color: #f8f8f2;
      font-family: "VT323", "Courier New", monospace;
      font-size: 24px;
    }

    body::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      background: repeating-linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.05),
        rgba(255, 255, 255, 0.05) 1px,
        transparent 1px,
        transparent 5px
      );
      opacity: 0.45;
      z-index: 2;
    }

    #app {
      position: relative;
      z-index: 1;
    }

    .game {
      width: min(92vw, 460px);
      padding: 28px;
      border: 8px solid #2c3138;
      background: #050b0f;
      box-shadow:
        0 0 0 4px #000,
        12px 12px 0 #000,
        inset 0 0 28px rgba(111, 195, 106, 0.12);
      text-align: center;
    }

    h1 {
      margin: 0 0 18px;
      color: #77c66e;
      font-family: "Press Start 2P", "Courier New", monospace;
      font-size: clamp(1.1rem, 5vw, 1.75rem);
      line-height: 1.35;
      text-transform: uppercase;
      text-shadow: 4px 4px 0 #000;
    }

    h1 span {
      color: #ffffff;
    }

    .message {
      min-height: 30px;
      margin: 0 0 14px;
      font-weight: 700;
      color: #fff27a;
      letter-spacing: 1px;
      text-shadow: 2px 2px 0 #000;
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
      border: 3px solid #8a93a6;
      border-radius: 0;
      background: #081017;
      box-shadow: 4px 4px 0 #000;
      color: #f8f8f2;
      font-size: 2rem;
      font-weight: 900;
      text-transform: uppercase;
      text-shadow: 2px 2px 0 #000;
    }

    .correct {
      background: #6fc36a;
      border-color: #b8ff9b;
    }

    .present {
      background: #d6c94f;
      border-color: #fff27a;
      color: #101820;
      text-shadow: none;
    }

    .absent {
      background: #1b1f2a;
      border-color: #596579;
    }

    .keyboard {
      display: grid;
      gap: 8px;
      width: 100%;
      overflow: hidden;
    }

    .key-row {
      display: grid;
      grid-template-columns: repeat(10, minmax(0, 1fr));
      gap: 6px;
    }

    .key-row:nth-child(2) {
      grid-template-columns: repeat(9, minmax(0, 1fr));
      padding: 0 18px;
    }

    .key-row:nth-child(3) {
      grid-template-columns: 1.45fr repeat(7, minmax(0, 1fr)) 2.15fr;
    }

    button {
      min-width: 0;
      width: 100%;
      height: 44px;
      border: 3px solid #000;
      border-radius: 0;
      background: #d6dde8;
      box-shadow: 4px 4px 0 #000;
      color: #101820;
      font: inherit;
      font-weight: 900;
      cursor: pointer;
      text-transform: uppercase;
    }

    button:hover {
      background: #ffffff;
    }

    button:active {
      transform: translate(3px, 3px);
      box-shadow: 1px 1px 0 #000;
    }

    .wide {
      min-width: 0;
      font-size: 20px;
    }

    .restart {
      margin-top: 18px;
      padding: 0 18px;
      background: #5fa8ff;
    }
  `;

  document.head.appendChild(style);
}
