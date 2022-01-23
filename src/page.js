const { start } = require("./startup.js");

const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  start();
});
