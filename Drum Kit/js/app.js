var sounds = [
  "crash.mp3",
  "kick-bass.mp3",
  "snare.mp3",
  "tom-1.mp3",
  "tom-2.mp3",
  "tom-3.mp3",
  "tom-4.mp3",
];
function call(name) {
  return document.querySelector(name);
}
function callAll(name) {
  return document.querySelectorAll(name);
}
var playSound = (audio) => new Audio(audio).play();

let drumLength = callAll(".drum");

for (var i = 0; i < drumLength.length; i++) {
  callAll(".drum")[i].addEventListener("click", (e) => {
    let key = e.target.classList[0];
    let path = "sounds/";
    keyCase(key, path);
  });
}

let drum = callAll(".drum");
drum.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.target.classList.toggle(`animate__bounceIn`);
  });
});

// Use keyboard to play drum
document.addEventListener("keydown", (e) => {
  let key = String.fromCharCode(e.keyCode).toLowerCase();
  keyCase(key, "sounds/");
});

function keyCase(key, path) {
  switch (key) {
    case "w":
      playSound(path + sounds[0]);
      break;
    case "a":
      playSound(path + sounds[1]);
      break;
    case "s":
      playSound(path + sounds[2]);
      break;
    case "d":
      playSound(path + sounds[3]);
      break;
    case "j":
      playSound(path + sounds[4]);
      break;
    case "k":
      playSound(path + sounds[5]);
      break;
    case "l":
      playSound(path + sounds[6]);
      break;
    default:
      console.log("Oop!");
  }
}
