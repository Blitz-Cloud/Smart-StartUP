const { start, test, isProfile, readFolder } = window.myApi;
isProfile()
  .then(() => {
    console.log("there is a profile ");
    // this function is gonna call the createProfile() automatically on the start-up
  })
  .catch(() => {
    console.log("there isn't any profile");
  });
