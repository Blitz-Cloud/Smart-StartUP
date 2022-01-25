const { start } = require("../back-end/utilities");

const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  start();
});
