const {
  isProfile,
  readProfiles,
  runProfile,
  createProfile,
  ipc,
  deleteProfile,
} = window.myApi;
const start_btns = document.querySelectorAll(".start-btn");
const create_btn = document.getElementById("create");
const submit_btn = document.getElementById("submit");
const inputs = document.querySelectorAll("input");
const createWind = document.querySelector(".createWind");
const closeWind = document.querySelector("#close");
const del_Btns = document.querySelectorAll("#delete");
const add_Path = document.querySelector("#add_Path");
const inputFields = document.querySelector(".inputField");

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

add_Path.addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "text";
  input.name = "path";
  input.id = "input";
  inputFields.appendChild(input);
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
  for (let i = 0; i < start_btns.length; i++) {
    start_btns[i].addEventListener("click", (e) => {
      e.preventDefault();
      e.preventDefault();
      runProfile(profiles[i].path);
    });
  }
});

del_Btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    readProfiles().then((data) => {
      let profiles = data;
      for (let i = 0; i < del_Btns.length; i++) {
        del_Btns[i].addEventListener("click", async () => {
          await deleteProfile(profiles[i].location);
          window.location.reload();
          await ipc.send("reload");
        });
      }
    });
  });
});
