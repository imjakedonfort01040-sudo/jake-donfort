const terminal = document.getElementById("terminal");
const input = document.getElementById("command");
const bar = document.getElementById("bar");

let stage = 0;

const stages = [
  { text: "BOOT SEQUENCE INITIATED. Type: connect", answer: "connect" },
  { text: "RIDDLE 01: I have keys but no locks. What am I?", answer: "keyboard" },
  { text: "RIDDLE 02: What disappears when spoken?", answer: "silence" },
  { text: "RIDDLE 03: Decode → 01010100 01001001 01001101 01000101", answer: "time" },
  { text: "RIDDLE 04: Always ahead, never seen?", answer: "future" },
  { text: "RIDDLE 05: Rearrange: E R A H T", answer: "heart" },
  { text: "RIDDLE 06: Do you miss me?", answer: "yes" },
  { text: "RIDDLE 07: I miss you too :) type —> <3", answer: "<3" },
  { text: "RIDDLE 08: Morse → .... . .- .-.", answer: "hear" },
  { text: "RIDDLE 09: Has an eye but can’t see?", answer: "needle" },
  { text: "RIDDLE 10: Hidden word → The cODe Is EveryWhere", answer: "code" },
  { text: "RIDDLE 11: Can be cracked and told", answer: "joke" },
  { text: "RIDDLE 12: Runs but never walks", answer: "water" },
  { text: "RIDDLE 13: Taken before given", answer: "photo" },
  { text: "RIDDLE 14: Opposite of noise", answer: "silence" },
  { text: "FINAL NODE: type unlock", answer: "unlock" }
];

function print(msg) {
  terminal.innerHTML += `<div>&gt; ${msg}</div>`;
  terminal.scrollTop = terminal.scrollHeight;
}

print(stages[0].text);

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const val = input.value.trim().toLowerCase();
    print(val);
    input.value = "";

    if (val === stages[stage].answer) {
      stage++;
      bar.style.width = (stage / stages.length * 100) + "%";

      if (stage < stages.length) {
        print("ACCESS OK");
        print(stages[stage].text);
      } else {
        print("ACCESS GRANTED");
        print("You think I'm gone but I'm always here.");
        print("Watching you and protecting you. Loving you even from a distance. I'll be back.");
      }
    } else {
      print("DENIED");
    }
  }
});

// MATRIX EFFECT
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff99";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 50);
