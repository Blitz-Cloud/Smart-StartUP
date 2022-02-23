const { isProfile, readProfiles, runProfile, createProfile, ipc } =
  window.myApi;
const btns = document.querySelectorAll(".start-btn");
const create_btn = document.getElementById("create");
const submit_btn = document.getElementById("submit");
const inputs = document.querySelectorAll("input");
const createWind = document.querySelector(".createWind");
const closeWind = document.querySelector("#close");

isProfile()
  .then((data) => {
    console.log("Rendering the profiles");
  })
  .catch((err) => {
    createWind.style.display = "grid";
  });

create_btn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  createWind.style.display = "grid";
});

closeWind.addEventListener("click", () => {
  closeWind.parentNode.parentElement.parentElement.style.display = "none";
});

submit_btn.addEventListener("click", (e) => {
  const name = inputs[0].value;
  const paths = [];
  for (i = 1; i < inputs.length; i++) {
    paths.push(inputs[i].value);
  }
  console.log(paths);
  createProfile(name, paths);
  createWind.style.display = "none";
  ipc.send("reload");
});
readProfiles().then((data) => {
  let profiles = data;
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
      e.preventDefault();
      e.preventDefault();
      runProfile(profiles[i].path);
    });
  }
});
