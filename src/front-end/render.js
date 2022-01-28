const { start, test, isProfile, readFolder } = window.myApi;
isProfile().catch(() => {
  console.log("there isn't any profile");
  console.log("there is a profile ");
  // this function is gonna call the createProfile() automatically on the start-up
});
