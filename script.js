// Typing Animation
const texts = ["Web Designer", "Frontend Developer", "Python Developer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let letter = "";
(function type() {
  if (index === texts.length) {
    index = 0;
  }
  currentText = texts[index];
  letter = currentText.slice(0, ++charIndex);
  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    index++;
    charIndex = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 120);
  }
})();