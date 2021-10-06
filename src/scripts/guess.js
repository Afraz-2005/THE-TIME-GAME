let myComputerElements = ['U ARE CURSED', 'Someone shall fulfill your 3 wishes. Contact me, I might be the one too', 'Your future is dark', "I'm gonna put some dirt in your eye", "BE AWARE!"];

setTimeout(function () {
  let compRand = myComputerElements[Math.floor(Math.random() * myComputerElements.length)];
  document.querySelector(".m1").innerHTML = compRand;
  document.querySelector(".time").innerText = "";
}, 3000);