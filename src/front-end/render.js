const { start, test } = window.myApi;

const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  myApi.start();
});

console.log(test);
