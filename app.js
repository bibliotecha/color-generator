const color = ["red", "blue", "yellow"];
const colorbox = document.getElementById("colorbox");
const hexColors = [0, 1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E"];
const button1 = document.querySelector("#btn");

button1.addEventListener("click", function () {
  const hexString = generateHEX();
  document.body.style.backgroundColor = hexString;
});

function generateHEX() {
  const newHex = [];
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 6);
    console.log("ran", randomNumber);
    const randomColor = hexColors[randomNumber];
    newHex.push(randomColor);
  }
  console.log("ne", newHex);
  const hexString = "#" + newHex.join("");
  return hexString;
}
