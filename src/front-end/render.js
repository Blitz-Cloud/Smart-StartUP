const { start, test, isProfile, readFolder } = window.myApi;

// const btn = document.querySelector("button");
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   e.stopPropagation();
//   myApi.start();
// });

// console.log(test);
isProfile()
  .then(() => {
    console.log("there is the first profile ");
  })
  .catch(() => {
    console.log("there isnt any profile");
  });
