const { isProfile, readProfiles, runProfile } = window.myApi;
isProfile()
  .then((data) => {
    console.log("Rendering the profiles");
  })
  .catch((err) => {
    // Call create profile page
    console.log("createProfile()");
  });
let profiles;

// console.log(profiles);
const btns = document.querySelectorAll(".start-btn");
readProfiles().then((data) => {
  profiles = data;
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
      e.preventDefault();
      e.preventDefault();
      runProfile(profiles[i].path);
    });
  }
});
